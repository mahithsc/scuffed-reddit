import React from 'react'

interface Props {
    text:string
}

const CommentBlock: React.FC<Props> = ({text}) => {
    return (
        <div className='bg-slate-200 h-28 mx-8 rounded mt-7 relative flex items-center'>
                <a className='ml-16 hover:underline'>{text}</a>
        </div>
    )
}

export default CommentBlock