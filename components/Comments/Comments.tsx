import React, {useEffect, useState} from 'react'
import {onSnapshot, collection} from 'firebase/firestore'
import type { NextPage } from 'next'
import {db} from '../../firebase/firebase'
import CommentBlock from './CommentBlock'

interface Props {
  route:string
}

const Comments = (route:any) => {
  const [listComments, setListComments] = useState([])

    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'posts', route, 'comments'), (docs) => {
            const data = []
            docs.forEach((doc) => {
                data.push({
                    comment: doc.data().comment
                })
            })
            setListComments(data)
        })
        return unsub
    }, [])

    useEffect(() => {
        console.log(listComments)
    }, [listComments])

  return (
    listComments.map((something) => (
      <CommentBlock text={undefined} />
    ))
  )
}

export default Comments