import { TextField } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { createPost } from '../firebase/firebaseFunctions';

const modal = () => {

    const [post, setPost] = useState<string>("")

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-blue-500 h-96 w-96 rounded-xl relative'>
                <h1 className='text-white justify-center flex text-2xl'>Post</h1>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={post}
                    onChange={(e) => {
                        setPost(e.target.value)
                    }}
                    className='flex mt-6'
                />
                <div className='flex justify-center absolute bottom-5 left-1/2'>
                    <Link href='/'>
                        <Button
                            className='text-black flex justify-center' 
                            variant="text" 
                            onClick={() => {createPost(post)}}>
                            Post
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default modal