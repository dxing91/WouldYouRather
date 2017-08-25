import React from 'react'
import { formatDecisionData } from 'helpers/utils'

function Option({info, onClick, previousDecision, agreeOrDisagree, totalCount}) {
  const percentageCalc = info.selectedCount && totalCount ? info.selectedCount / totalCount * 100 : 0;
  return previousDecision
    ? <div className='decision__option' onClick={onClick}>
        <h3>{info.text}</h3>
        <p className='decision__percentage'>{percentageCalc}%</p>
        <p>{info.selectedCount} {agreeOrDisagree}</p>
      </div>
    : <div className='decision__option' onClick={onClick}>
        <h1>{info.text}</h1>
      </div>
}

export default function Decision({decision, userDecision, onClick}) {
  const decisionId = decision.decisionId
  const previousDecision = userDecision ? userDecision.chose : false
  return (
    <div className='main-container decision'>
      <h2>Would you rather...</h2>
      <div className='decision__options'>
        <Option
          info={decision.firstOption}
          agreeOrDisagree={previousDecision === 'firstOption' ? 'agree' : 'disagree'}
          previousDecision={previousDecision}
          totalCount={decision.firstOption.selectedCount + decision.secondOption.selectedCount}
          onClick={() => onClick(decisionId, formatDecisionData(decisionId, 'firstOption'), previousDecision)} />
        <span className='decision__or'>OR</span>
        <Option
          info={decision.secondOption}
          agreeOrDisagree={previousDecision === 'secondOption' ? 'agree' : 'disagree'}
          previousDecision={previousDecision}
          totalCount={decision.firstOption.selectedCount + decision.secondOption.selectedCount}
          onClick={() => onClick(decisionId, formatDecisionData(decisionId, 'secondOption'), previousDecision)} />
      </div>
    </div>
  )
}
