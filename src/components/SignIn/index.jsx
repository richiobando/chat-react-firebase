import React, { useState } from 'react'
import {
  // getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'

export default function SignIn ({ auth }) {
  const [user, setUser] = useState({ email: '', password: '' })
  // const newAuth = getAuth()
  const handleSignIn = (e) => {
    e.preventDefault()
    console.log({ user: user.email, pass: user.password })
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log({user})
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.error({ errorCode, errorMessage })
        // ..
      })
    signInWithEmailAndPassword(auth, user.email, user.password)
  }
  const signWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
  }

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input
          type='text'
          value={user.email}
          placeholder='email'
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type='password'
          value={user.password}
          placeholder='password'
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type='submit'>Sign Up</button>
      </form>
      <button onClick={signWithGoogle}>Sign in with Google</button>
    </div>
  )
}
