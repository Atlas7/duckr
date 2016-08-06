import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBFTIMIprigO8C7yfap5-IyKoPiKj9ELgk",
  authDomain: "reactjs-duckr-c6f85.firebaseapp.com",
  databaseURL: "https://reactjs-duckr-c6f85.firebaseio.com",
  storageBucket: "reactjs-duckr-c6f85.appspot.com"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export const usersDucksExpirationLength = 10000
export const userExpirationLength = 10000