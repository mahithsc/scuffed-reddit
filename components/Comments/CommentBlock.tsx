import React from 'react'

interface Props {
    text:string
}

const CommentBlock: React.FC<Props> = ({text}) => {
    return (
        <div className='bg-slate-200 h-20 mx-5 rounded mt-7 relative flex items-center'>
                <div className='ml-16 hover:underline'>{text}</div>
        </div>
    )
}

export default CommentBlock