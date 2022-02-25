import { TextField } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import { createPost } from '../firebase/firebaseFunctions';

const modal = () => {
    const [post, setPost] = useState("")

        return (
            <div className='items-center justify-center flex h-screen'>
                <div className='bg-blue-500 h-96 w-96 rounded-xl flex flex-col items-center justify-between px-5'>
                    <div className='text-white'>Your post</div>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        className='bg-blue-800 min-w-full'
                        value={post}
                        onChange={() => setPost(event?.target.value)}

                    />
                    <Link href={'/'}>
                        <button
                            className='bg-white rounded-md px-5 mb-5 hover:bg-grey-500'
                            onClick={() => {
                                console.log(post)
                                createPost(post)
                            }}
                        >
                            <div className='text-black'>Post</div>
                        </button>
                    </Link>
                </div>
            </div>
        )
}

export default modal