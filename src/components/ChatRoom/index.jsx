import React, { useState } from 'react'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  serverTimestamp,
  addDoc
} from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

export default function ChatRoom ({ app, auth }) {
  const [messageFrom, setMessageFrom] = useState('')

  const db = getFirestore(app)
  const messagesRef = collection(db, 'messages')
  const q = query(messagesRef, orderBy('createdAt'), limit(25))

  const [messages] = useCollectionData(q, { idField: 'id' })

  const sendMessage = async (e) => {
    e.preventDefault()
    const { uid, photoURL } = auth.currentUser
    await addDoc(collection(db, 'messages'), {
      text: messageFrom,
      createdAt: serverTimestamp(),
      uid,
      photoURL
    })
    setMessageFrom('')
  }
  return (
    <>
      <div>
        {messages &&
          messages.map((msg) => (
            <ChatMessage key={msg.uid} message={msg} auth={auth} />
          ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type='text'
          value={messageFrom}
          onChange={(e) => setMessageFrom(e.target.value)}
        />

        <button type='submit'>Send</button>
      </form>
    </>
  )
}
export function ChatMessage ({ message, auth }) {
  const { text, uid, photoURL } = message
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'
  return (
    <div className={`message ${messageClass}`}>
      {/* <img src={photoURL} alt='user photo' /> */}
      <p>{text}</p>
    </div>
  )
}
