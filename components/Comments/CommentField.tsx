import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/firebase'
import { addDoc, collection, doc, onSnapshot } from 'firebase/firestore'
import type { NextPage } from 'next'

interface Props {
    route: string
}

const CommentField: NextPage<Props> = ({ route }) => {

    const [comment, setComment] = useState("")
    
    //this adds the comments 
    const createComment = async (words: string) => {
        try {
            await addDoc(collection(db, 'posts', route, 'comments'), {
                comment: words
            })
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div className='fixed bottom-3 justify-center w-screen bg-slate-200 h-10 flex'>
            <div className='h-10 mr-10 '>
                <form className='w-full h-10'>
                    <input type="text" className='w-full h-10 border-2 border-neutral-900'

                        value={comment}
                        onChange={(event) => {
                            setComment(event.target.value)
                        }}
                    />
                </form>
            </div>
            <button
                onClick={() => {
                    if (comment.length > 0) {
                        createComment(comment)
                        setComment("")
                    }

                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                {/* <div>hello world</div> */}
            </button>
        </div>
    )
}

export default CommentField