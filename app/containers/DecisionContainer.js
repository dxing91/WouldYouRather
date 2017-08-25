import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { handleSingleDecision } from 'store/decisions'
import { Decision } from 'components'
import { addAndHandleDecision } from 'store/users'

class DecisionContainer extends Component {
  handleClickOption = (decisionId, data, previousDecision) => {
    this.props.addAndHandleDecision(this.props.user.info.uid, decisionId, data, previousDecision)
  }

  render() {
    const { decision, user } = this.props
    const decisionId = this.props.routeParams.decisionId
    const userDecision = user.decisionsMade[decisionId]

    if (!decision) return null

    return (
      <Decision
        decision={decision}
        userDecision={userDecision}
        onClick={this.handleClickOption} />
    )
  }
}

function mapStateToProps(state, {routeParams}) {
  return {
    decision: state.decisions.decisions[routeParams.decisionId],
    user: state.users[state.users.authedId]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addAndHandleDecision: (uid, decisionId, data, previousDecision) => dispatch(addAndHandleDecision(uid, decisionId, data, previousDecision))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DecisionContainer)
