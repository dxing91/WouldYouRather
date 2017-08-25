import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Authenticate } from 'components'
import auth from 'helpers/auth'
import * as userActions from 'store/users'

class AuthenticateContainer extends Component {
  handleAuth = (e) => {
    e.preventDefault()
    this.props.handleAuth()
      .then(() => this.context.router.replace('list'))
  }

  render() {
    const { isFetching, error } = this.props.users
    return (
      <Authenticate
        isFetching={isFetching}
        error={error}
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
