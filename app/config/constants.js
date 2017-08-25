import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyA-CuDLmRQ6aTHRh84-JpE-t9sdYLiVhZ4",
  authDomain: "wouldyourather-aa7ea.firebaseapp.com",
  databaseURL: "https://wouldyourather-aa7ea.firebaseio.com",
  projectId: "wouldyourather-aa7ea",
  storageBucket: "",
  messagingSenderId: "548851728228"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export const DECISIONS_EXPIRATION_LENGTH = 60000
