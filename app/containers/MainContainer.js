import React, { Component } from 'react'
import { Link } from 'react-router'
import { Navigation } from 'components'

export default class MainContainer extends Component {
  render() {
    return (
      <div>
        <Navigation isAuthed={false} />
        {this.props.children}
      </div>
    )
  }
}
