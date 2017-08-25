import { ref } from 'config/constants'

export function fetchUserDecisionsFb(uid) {
  return ref.child(`users/${uid}/decisionsMade`)
    .once('value')
    .then((snapshot) => snapshot.val() || {})
    .catch((err) => console.warn('Error fetching decisions', err))
}

export function saveDecisionFb(decision) {
  const decisionId = ref.child('decisions').push().key
  return ref.child(`decisions/${decisionId}`).set({...decision, decisionId})
}

export function listenToDecisionsFb(cb, error) {
  return ref.child('decisions').on('value', (snapshot) => {
    return cb(snapshot.val() || {})
  }, error)
}

export function fetchSingleDecisionFb(decisionId) {
  return ref.child(`decisions/${decisionId}`)
    .once('value')
    .then((snapshot) => snapshot.val() || {})
}

export function addUserDecisionFb(uid, decisionId, data) {
  return ref.child(`/users/${uid}/decisionsMade/${decisionId}`).set(data)
}

export function changeDecisionCountFb(decisionId, data, previousDecision) {
  const chose = data.chose
  if (!previousDecision) {
    return ref.child(`/decisions/${decisionId}/${chose}/selectedCount`)
      .transaction((currentValue = 0) => currentValue + 1)
  } else {
    return ref.child(`/decisions/${decisionId}/${previousDecision}/selectedCount`)
      .transaction((currentValue = 0) => currentValue - 1)
      .then(() => ref.child(`/decisions/${decisionId}/${chose}/selectedCount`)
      .transaction((currentValue = 0) => currentValue + 1))
  }
}
