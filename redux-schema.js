{
  users: {
    isAuthed,
    isFetching,
    error,
    authedId,
    [uid]: {
      lastUpdated,
      info: {
        name,
        uid,
        avatar,
      },
      decisionsMade: [decisionId, decisionId],
    }
  },
  remainingDecisions: [decisionId, decisionId],
  decisions: {
    lastUpdated,
    isFetching,
    error,
    decesions: {
      [decisionId]: {
        author,
        timestamp,
        firstOption
          text
          selectedCount
        secondOption
          text
          selectedCount
      }
    }
  },
  listeners: {
    [listenersId]
  },
}