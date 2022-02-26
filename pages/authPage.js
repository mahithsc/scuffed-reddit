import React, { useEffect, useState } from 'react'
import {auth} from '../firebase/firebase'
import {GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import { useRouter } from 'next/router'

const authPage = () => {

  const router = useRouter()
  const provider = new GoogleAuthProvider();

  const [userInfo, setUserInfo] = useState(null)

  onAuthStateChanged(auth, (user) => {
    if(user){
      setUserInfo(user.uid)
    }else{
      setUserInfo(null)
    }
  })

  useEffect(() => {
    console.log(userInfo)
    if(userInfo !== null){
      router.push('/home')
    }
  }, [userInfo])

  const login = async () => {
    await signInWithPopup(auth, provider)
  }

  return (
    <button onClick={() => {login()}}>
      click me
    </button>
  )
}

export default authPage