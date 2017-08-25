import { DECISIONS_EXPIRATION_LENGTH } from 'config/constants'

export function formatDecision(firstDecisionText, secondDecisionText, userInfo) {
  return {
    timestamp: Date.now(),
    author: userInfo,
    firstOption: {
      text: firstDecisionText,
      selectedCount: 0
    },
    secondOption: {
      text: secondDecisionText,
      selectedCount: 0
    }
  }
}

export function decisionsAreStale(lastUpdated) {
 const milliseconds = new Date().getTime() - new Date(lastUpdated).getTime()
 return milliseconds > DECISIONS_EXPIRATION_LENGTH
}

export function formatTime(timestamp) {
  const date = new Date(timestamp)
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

export function formatDecisionData(decisionId, chose) {
  return {
    decisionId,
    chose
  }
}
