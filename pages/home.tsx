import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Post from '../components/Post'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { useRouter } from 'next/router'


const home = () => {
    const router = useRouter()

    //state hook for the items in the database and the the userInformation
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
        setRender(render => render+1)
        console.log(userInfo)
    }, [userInfo])

    //fetching data
    useEffect(() => {
        getData()
        
    }, [])

    useEffect(() => {
        if(render >= 2){
            if(userInfo === null){
                router.push('/authPage')
            }
        }
    }, [render])


    const getData = async () => {
        setItems([])
        const c = collection(db, 'posts')
        const snapShot = await getDocs(c)
        snapShot.forEach((doc) => {
            setItems(items => [...items, {
                docId: doc.id,
                title: doc.data().title,
                votes: doc.data().votes
            }])
        })
    }

    return (
        <div className="">
            <Head>
                <title>Scuffed Reddit</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div>
                {(items.map((item) => (
                    <Post text={item.title} votes={item.votes} docId={item.docId} />
                )))
                }
            </div>

        </div>
    )
}

export default home