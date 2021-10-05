import firebase from 'firebase/compat'

const firebaseConfig = {
    apiKey: "AIzaSyCKcHFxr5-15dlKvMY7Pa8AQwc2Dgj_w3M",
    authDomain: "clone-6c4fe.firebaseapp.com",
    projectId: "clone-6c4fe",
    storageBucket: "clone-6c4fe.appspot.com",
    messagingSenderId: "396691578281",
    appId: "1:396691578281:web:9765325134b7cf4a0eb8b8"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }