import React from 'react'

export default function Authenticate({isFetching, error, onAuth}) {
  return (
    <div>
      <p>Log in with Facebook</p>
      <button onClick={onAuth}>Log in</button>
    </div>
  )  
}
