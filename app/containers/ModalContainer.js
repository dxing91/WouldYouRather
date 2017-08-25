import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as modalActions from 'store/modal'
import { Modal } from 'components'

function validateFields(firstDecisionText, secondDecisionText) {
  return firstDecisionText.length > 0 &&
    firstDecisionText.length <= 140 &&
    secondDecisionText.length > 0 &&
    secondDecisionText.length <= 140
}

function mapStateToProps(state) {
  return {
    isOpen: state.modal.isOpen,
    firstDecisionText: state.modal.firstDecisionText,
    secondDecisionText: state.modal.secondDecisionText,
    userInfo: state.users[state.users.authedId].info,
    validateFields: validateFields(state.modal.firstDecisionText, state.modal.secondDecisionText)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(modalActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
