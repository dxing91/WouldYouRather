import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

export default function Navigation({isAuthed}) {
  return isAuthed
    ? <div>
        <Link to='/'>Home</Link>
        <Link to=''>New Decision</Link>
        <Link to='logout'>Log out</Link>
      </div>
    : <div>
        <Link to='/'>Home</Link>
        <Link to='authenticate'>Log in</Link>
      </div>
}

Navigation.propTypes = {
  isAuthed: PropTypes.bool
}
