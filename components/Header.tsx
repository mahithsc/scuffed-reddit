import Link from 'next/link'
import React, {useState} from 'react'
import { onAuthStateChanged, signInWithRedirect, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { auth } from '../firebase/firebase'
import { sign } from 'crypto'

const Header = () => {

    const logout = async () => {
        await signOut(auth)
    }

    return (
        <div className='flex bg-blue-500 justify-between py-10 px-10 lg:justify-around'>
            <h1 className='text-white font-bold text-4xl'>Scuffed Reddit</h1>
            {/* <button type='button'  onClick={() => {console.log('hello world')}}>create post</button> */}

            <div className='space-x-5'>
                <Link href='/modal'>
                    <button className='bg-white px-2 rounded py-2 hover:bg-slate-300' >Create Post</button>
                </Link>

                <button className='bg-white px-2 rounded py-2 hover:bg-slate-300' onClick={() => {logout()}}>Logout</button>
            </div>

        </div>
    )
}

export default Header