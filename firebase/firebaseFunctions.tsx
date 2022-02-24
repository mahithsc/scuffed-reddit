import { db } from './firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { stripVTControlCharacters } from 'util'

const createPost = async (title: string) => {
        await addDoc(collection(db, 'posts'), {
            title: title,
            votes: 0,
            timeStamp: serverTimestamp()
        })
}

export { createPost }