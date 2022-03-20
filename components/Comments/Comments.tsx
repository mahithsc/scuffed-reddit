import React, {useEffect, useState} from 'react'
import {onSnapshot, collection} from 'firebase/firestore'
import type { NextPage } from 'next'
import {db} from '../../firebase/firebase'
import CommentBlock from './CommentBlock'
import {useRouter} from 'next/router'

interface Props {
  route:string
}

const Comments = () => {

  const router = useRouter()

  const [listComments, setListComments] = useState([])

    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'posts', router.asPath.substring(1), 'comments'), (docs) => {
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
    <div>
      {listComments.map((item) => (
        <CommentBlock text={item?.comment}/>
      ))}

      <div className='h-16'></div>
    </div>
  )
}

export default Comments