import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as modalActions from 'store/modal'
import { Modal } from 'components'

class ModalContainer extends Component {
  render() {
    return (
      <Modal {...this.props} />
    )
  }
}

// ModalContainer.propTypes = {

// }

function mapStateToProps(state) {
  return {
    isOpen: state.modal.isOpen,
    firstDecisionText: state.modal.firstDecisionText,
    secondDecisionText: state.modal.secondDecisionText,
    userInfo: state.users[state.users.authedId].info
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(modalActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)
