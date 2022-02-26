import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Post from '../components/Post'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { useRouter } from 'next/router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/firebase'


const home = () => {
  const [items, setItems] = useState([])

  const router = useRouter()

  onAuthStateChanged(auth, (user) => {
      if(user.uid === null){
          router.push('/index')
      }
  })

  useEffect(() => {
    getData()
  }, [])


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
          <Post text={item.title} votes = {item.votes} docId = {item.docId}/>
        )))
        }
      </div>

    </div>
  )
}

export default home