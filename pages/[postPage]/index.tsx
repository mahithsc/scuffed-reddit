import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebase'
import Post from '../../components/Post'
import Comments from '../../components/Comments/Comments'
import CommentField from '../../components/Comments/CommentField'

const index = () => {
  const router = useRouter()

  //useState hook
  const [docData, setDocData]:any = useState()
  const routerPath:string = router.asPath.substring(1)
  

  //useEffect hook
  useEffect(() => {
    getData(routerPath)
  }, [])

  const getData = async (path:string) => {
    console.log(path)
    const tempData = (await getDoc(doc(db, 'posts', path))).data()
    setDocData(tempData)
  }

  return (
    <div>
      <Post text={docData?.title} votes={docData?.votes} docId={routerPath}/>
      <div className='ml-8 mt-11 font-bold text-2xl flex justify-center'>Comments</div>
      <Comments route={routerPath}/>
      <CommentField route={routerPath}/>
    </div>
  )
}

export default index