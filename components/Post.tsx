import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {} from '../firebase/firebase'
import {} from 'firebase/firestore'

const Post = ({ text, votes, id }) => {

    const [docid, setId] = useState(id)
    const [upvotes, setUpvotes] = useState(votes)


    useEffect(() => {
        
    }, [])

    return (
        <div className='bg-slate-200 h-28 mx-8 rounded mt-7 relative flex items-center'>
            <div className='flex flex-col items-center h-full justify-center absolute left-5'>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7"/>
                    </svg>
                </button>


                <div>{upvotes}</div>

                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            <div className='ml-16'>{text}</div>
        </div>
    )
}

export default Post