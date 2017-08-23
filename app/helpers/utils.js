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
