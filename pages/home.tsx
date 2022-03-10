import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Post from '../components/Post'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { useRouter } from 'next/router'


//server side rendering
export const getServerSideProps = async () => {
    const something = []
        const c = collection(db, 'posts')
        const snapShot = await getDocs(c)
        snapShot.forEach((doc) => {
            something.push({
                docId: doc.id,
                title: doc.data().title,
                votes: doc.data().votes
            })
        })
    return {
      props: {
        todos: something
      }
    }
  }

const home = ({todos}) => {
    const router = useRouter()
    const [items, setItems] = useState([])
    const [userInfo, setUserInfo] = useState(null)
    const [render, setRender] = useState(0)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUserInfo(user.uid)
        } else {
            setUserInfo(null)
        }
    })

    useEffect(() => {
        setRender(render => render + 1)
    }, [userInfo])

    //fetching data
    useEffect(() => {
        // getData()
        console.log(todos)
    }, [])

    useEffect(() => {
        if (render >= 2) {
            if (userInfo === null) {
                router.push('/authPage')
            }
        }
    }, [render])

    return (
        <div className="">
            <Head>
                <title>Scuffed Reddit</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div>
                {(todos?.map((item) => (
                    <Post text={item.title} votes={item.votes} docId={item.docId} />
                )))
                }
            </div>

        </div>
    )
}

export default home