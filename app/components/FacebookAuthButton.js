import React from 'react'

export default function FacebookAuthButton({onAuth, isFetching}) {
  return (
    <button onClick={onAuth}>
      {isFetching
        ? 'Logging in...'
        : 'Log in with Facebook'}
    </button>
  )
}
