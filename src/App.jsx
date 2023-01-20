// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ChatRoom from './components/ChatRoom'
import SignIn from './components/SignIn'

import 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'

import { useAuthState } from 'react-firebase-hooks/auth'
const FIREBASE_API = import.meta.env.VITE_FIREBASE_API
const MESSAGING_SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID
const APP_ID = import.meta.env.VITE_APP_ID
const firebaseApp = initializeApp({
  apiKey: FIREBASE_API,
  authDomain: 'chat-3b53f.firebaseapp.com',
  projectId: 'chat-3b53f',
  storageBucket: 'chat-3b53f.appspot.com',
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
})
const auth = getAuth(firebaseApp)
// const auth = firebase.auth()
// const firestore = firebase.firestore()

function App () {
  const [user] = useAuthState(auth)
  return (
    <main className='App'>
      <Navbar auth={auth} />
      <section>
        {user
          ? (
            <ChatRoom app={firebaseApp} auth={auth} />
            )
          : (
            <SignIn auth={auth} />
            )}
      </section>
    </main>
  )
}

export default App
