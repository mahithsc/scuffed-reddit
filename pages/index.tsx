import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { auth} from '../firebase/firebase'
import { useRouter } from 'next/router'
import { onAuthStateChanged } from 'firebase/auth'

const Home: NextPage = () => {

  const router = useRouter()
  const [userInfo, setUserInfo] = useState(null)

  onAuthStateChanged(auth, (user) => {
    if(user){
      setUserInfo(user.uid)
    }else{
      setUserInfo(null)
    }
  })

  useEffect(() => {
    if(userInfo === null){
      router.push('/authPage')
    }else if(userInfo !== null){
      router.push('/home')
    }
  }, [userInfo])

  return (
    <div></div>
  )
}

export default Home
