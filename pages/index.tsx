import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Post from '../components/Post'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Scuffed Reddit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Post/>
    </div>
  )
}

export default Home
