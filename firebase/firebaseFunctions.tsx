import { db } from './firebase'
import { addDoc, collection, serverTimestamp, updateDoc, doc, getDoc, increment } from 'firebase/firestore'
import { stripVTControlCharacters } from 'util'

//creates a post
const createPost = async (title: string) => {
    await addDoc(collection(db, 'posts'), {
        title: title,
        votes: 0,
        timeStamp: serverTimestamp()
    })
}

//adds vote to the post
const addUpvote = async (id: string) => {
    await updateDoc(doc(db, 'posts', id), {
        votes: increment(1)
    })
}

//decrease votes from the post
const decreaseVote = async (id: string) => {
    await updateDoc(doc(db, 'posts', id), {
        votes: increment(-1)
    })
}

export { createPost, addUpvote, decreaseVote }