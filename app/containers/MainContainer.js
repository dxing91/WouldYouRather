import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Navigation } from 'components'

class MainContainer extends Component {
  render() {
    return (
      <div>
        <Navigation isAuthed={this.props.isAuthed} />
        {this.props.children}
      </div>
    )
  }
}

function mapStateToFunction(state) {
  return {
    isAuthed: state.users.isAuthed
  }
}

export default connect(mapStateToFunction)(MainContainer)
