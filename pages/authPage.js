import React, { useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signInWithRedirect } from 'firebase/auth'
import { useRouter } from 'next/router'

const authPage = () => {

  const router = useRouter()
  const provider = new GoogleAuthProvider();

  const [userInfo, setUserInfo] = useState(null)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserInfo(user.uid)
    } else {
      setUserInfo(null)
    }
  })

  useEffect(() => {
    console.log(userInfo)
    if (userInfo !== null) {
      router.push('/home')
    }
  }, [userInfo])

  const login = async () => {
    await signInWithRedirect(auth, provider)
  }

  return (
    <div className='flex flex-col bg-blue-500 py-10 px-10 h-screen items-center justify-center space-y-5'>
      <h1 className='text-white font-bold text-4xl'>Scuffed Reddit</h1>
      {/* <button type='button'  onClick={() => {console.log('hello world')}}>create post</button> */}

      {/* <button onClick={login()}> */}
        <button className='flex bg-white space-x-4 items-center px-3 rounded-xl' onClick={() => {login()}}>
          <img src='https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip' width={30} />
          <div>Login With Google</div>
        </button>

      {/* </button> */}


    </div>
  )
}

export default authPage