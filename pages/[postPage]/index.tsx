import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import {} from 'firebase/firestore'

const router = useRouter()

export const getServerSideProps = async () => {

  //gets the path of the 
  const path:string = router.asPath

  const getData = async () => {
    
  }

  return {
  }
}

const index: NextPage = () => {
  
  

  return (
    <div>
      {/* <div className=''></div> */}
      <div>{}</div>
    </div>
  )
}

export default index