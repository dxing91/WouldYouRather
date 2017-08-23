import { ref } from 'config/constants'

export function fetchUserDecisions(uid) {
  return ref.child(`users/${uid}/decisionsMade`)
    .once('value')
    .then((snapshot) => snapshot.val() || {})
    .catch((err) => console.warn('Error fetching decisions', err))
}

export function saveDecision(decision) {
  const decisionId = ref.child('decisions').push().key
  return ref.child(`decisions/${decisionId}`).set({...decision, decisionId})
}
