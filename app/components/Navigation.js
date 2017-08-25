import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { ModalContainer } from 'containers'

export default function Navigation({isAuthed}) {
  return isAuthed
    ? <div className='nav'>
        <span>
          <Link className='nav__logo' to='/'>WYR</Link>
        </span>
        <span>
          <ModalContainer />
          <Link className='nav__link' to='logout'>LOG OUT</Link>
        </span>
      </div>
    : <div className='nav'>
        <span>
          <Link className='nav__logo' to='/'>WYR</Link>
        </span>
        <span>
        <Link className='nav__link' to='authenticate'>Log in</Link>
        </span>
      </div>
}

Navigation.propTypes = {
  isAuthed: PropTypes.bool
}
