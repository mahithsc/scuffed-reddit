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

export default Home
