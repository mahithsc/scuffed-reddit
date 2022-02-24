import React, { useState } from 'react'

const modal = () => {

    const [post, setPost] = useState<String>("")

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-blue-500 h-96 w-96 rounded-xl'>
                <h1 className='text-white justify-center flex text-2xl'>Post</h1>
                
            </div>
        </div>
    )
}

export default modal