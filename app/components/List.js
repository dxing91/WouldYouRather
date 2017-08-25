import React from 'react'
import { ListItemContainer } from 'containers'

export default function List({decisions, decisionsMade}) {
  return (
    <div className='main-container list'>
      <h2>Would You Rather...</h2>
      <div>
        {decisions.map((decision, index) => (
          <ListItemContainer
            decision={decision}
            decisionsMade={decisionsMade}
            key={index} />
        ))}
      </div>
    </div>
  )
}
