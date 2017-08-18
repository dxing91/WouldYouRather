import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Authenticate } from 'components'
import auth from 'helpers/auth'
import * as userActions from 'store/users'

class AuthenticateContainer extends Component {
  constructor() {
    super()
  }

  handleAuth = (e) => {
    e.preventDefault()
    this.props.handleAuth()
      .then(() => this.context.router.replace('list'))
  }

  render() {
    return (
      <Authenticate
        isFetching={false}
        error={false}
        onAuth={this.handleAuth} />
    )
  }
}

AuthenticateContainer.propTypes = {
  handleAuth: PropTypes.func
}

AuthenticateContainer.contextTypes = {
  router: PropTypes.object
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateContainer)
