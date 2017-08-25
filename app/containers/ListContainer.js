import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { List } from 'components'
import * as decisionsActions from 'store/decisions'
import { decisionsAreStale } from 'helpers/utils'

class ListContainer extends Component {
  componentDidMount() {
    if (decisionsAreStale(this.props.lastUpdated)) this.props.handleDecisionsListener()
  }

  render() {
    const { decisions, decisionsMade } = this.props
    return <List decisions={decisions} decisionsMade={decisionsMade} />
  }
}

function mapStateToProps(state) {
  const decisionsObj = state.decisions.decisions
  return {
    decisionsMade: state.users[state.users.authedId].decisionsMade,
    isFetching: state.decisions.isFetching,
    lastUpdated: state.decisions.lastUpdated,
    decisions: Object.keys(decisionsObj)
      .sort((a, b) => decisionsObj[b].timestamp - decisionsObj[a].timestamp)
      .map((id) => decisionsObj[id]),
    error: state.decisions.error
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(decisionsActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
