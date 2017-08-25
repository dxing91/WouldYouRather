import React from 'react'
import { FacebookAuthButton } from 'components'

export default function Authenticate({isFetching, error, onAuth}) {
  return (
    <div className='main-container'>
      <h1>Log in</h1>
      {error
        ? <p>There was an error.</p>
        : <FacebookAuthButton onAuth={onAuth} isFetching={isFetching} />}
    </div>
  )

  return  
}
