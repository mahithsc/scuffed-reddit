import React, { useEffect, useState } from 'react'
import {auth} from '../firebase/firebase'
import {GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import { useRouter } from 'next/router'

const authPage = () => {
  
  const router = useRouter()

  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (user) => {
    setUser(user)
  })

  useEffect(() => {
    if(user!== null){
      router.push('/home')
    }
  }, [user])

  const signinWithGoogle = async () => {
    try{
      await signInWithPopup(auth, provider)
    }catch(err){
      console.log('err')
    }

  }

  return (
    <button onClick={() => signinWithGoogle()}>
      click me
    </button>
  )
}

export default authPage