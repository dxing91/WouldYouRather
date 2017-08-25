import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ListItem } from 'components'

export default class ListItemContainer extends Component {
  handleClick = () => {
    this.context.router.push(`/decision/${this.props.decision.decisionId}`)
  }

  render() {
    const { decision, decisionsMade } = this.props
    return (
      <ListItem
        firstOptionText={decision.firstOption.text}
        secondOptionText={decision.secondOption.text}
        author={decision.author.name}
        timestamp={decision.timestamp}
        answered={!!Object.keys(decisionsMade).find((decisionId) => decisionId === decision.decisionId)}
        onClick={this.handleClick} />
    )
  }
}

ListItemContainer.contextTypes = {
  router: PropTypes.object
}
