import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='flex bg-blue-500 justify-between py-10 px-10 lg:justify-around'>
            <h1 className='text-white font-bold text-4xl'>Scuffed Reddit</h1>
            {/* <button type='button'  onClick={() => {console.log('hello world')}}>create post</button> */}
            <Link href='/modal'>
                <a className='bg-white px-2 rounded py-2 hover:bg-slate-300'>Create Post</a>
            </Link>
        </div>
    )
}

export default Header