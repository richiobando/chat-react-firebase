import React from 'react'
import { signOut } from 'firebase/auth'
export default function SignOut ({ auth }) {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Sing Out Successfull')
      })
      .catch((err) => console.error(err))
  }
  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}
