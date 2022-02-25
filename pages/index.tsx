import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Post from '../components/Post'
import { collection, doc, getDocs, onSnapshot, query } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import Link from 'next/link'
import { text } from 'node:stream/consumers'
import { stderr, stdout } from 'node:process'

const Home: NextPage = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    setItems([])
    const unsub = onSnapshot(collection(db, 'posts'), (snapshot) => {
      snapshot.forEach((doc) => {
        setItems(items => [...items, doc.data()])
      })
      console.log(items)
    })

    
    return () => unsub()
  }, [])



  return (
    <div className="">
      <Head>
        <title>Scuffed Reddit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* <div className='flex bg-blue-500 justify-between py-10 px-10 lg:justify-around'>
        <h1 className='text-white font-bold text-4xl'>Scuffed Reddit</h1>
        <Link href='/modal'>
          <button className='bg-white px-2 rounded py-2 hover:bg-slate-300'>Create Post</button>
        </Link>
      </div> */}

      <div>
        {(items.map((item) => (
          <Post text={item.title}/>
        )))
        }
      </div>

    </div>
  )
}

export default Home
