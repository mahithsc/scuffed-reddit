import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { db } from '../firebase/firebase'
import { onSnapshot, doc } from 'firebase/firestore'
import { stringify } from 'querystring'
import { addUpvote, decreaseVote } from '../firebase/firebaseFunctions'
import Link from 'next/link'

const Post = ({ text, votes, docId }) => {
    const [upvotes, setUpvotes] = useState(votes)

    useEffect(() => {
        const unsub = onSnapshot(doc(db, "posts", docId), (doc) => {
            setUpvotes(doc.data()?.votes);
        });

        return () => unsub()
    }, [])

    return (
        <div className='bg-slate-200 h-28 mx-8 rounded mt-7 relative flex items-center'>
            <div className='flex flex-col items-center h-full justify-center absolute left-5'>
                <button onClick={() => addUpvote(docId)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                </button>


                <div>{upvotes}</div>

                <button onClick={() => decreaseVote(docId)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            <Link href={`/${docId}`}>
                <a className='ml-16 hover:underline'>{text}</a>
            </Link>
        </div>
    )
}

export default Post