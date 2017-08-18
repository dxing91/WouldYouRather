import firebase from 'firebase'
import { ref, firebaseAuth } from 'config/constants'

export default function auth() {
  return firebaseAuth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
}

export function logout() {
  return firebaseAuth().signOut()
}
