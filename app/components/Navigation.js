import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { ModalContainer } from 'containers'

export default function Navigation({isAuthed}) {
  return isAuthed
    ? <div>
        <Link to='/'>Home</Link>
        <ModalContainer />
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
