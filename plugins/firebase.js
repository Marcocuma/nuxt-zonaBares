import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyCjyxEmBl9Kk0f891Hj2jjZJ-CZa2VrhV4",
    authDomain: "baradvisor-f115b.firebaseapp.com",
    databaseURL: "https://baradvisor-f115b.firebaseio.com",
    projectId: "baradvisor-f115b",
    storageBucket: "baradvisor-f115b.appspot.com",
    messagingSenderId: "676017751126",
    appId: "1:676017751126:web:1e2dd01192a343342aa7f7"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
}
const db = firebase.firestore()
export { db, firebase }