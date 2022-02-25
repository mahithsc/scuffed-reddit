import React from 'react'

const Post = ({text}) => {
    return (
        <div className='bg-slate-200 h-28 mx-8 rounded mt-7'>
            <text>{text}</text>
        </div>
    )
}

export default Post