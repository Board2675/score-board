import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "AIzaSyAbLNj-ETH36VL-J8jOAG50DBAjWLtZjn8",
    authDomain: "score-board-c86a7.firebaseapp.com",
    databaseURL: "https://score-board-c86a7.firebaseio.com",
    projectId: "score-board-c86a7",
    storageBucket: "",
    messagingSenderId: "487687155665",
    appId: "1:487687155665:web:b4bc5f63d48317da"
  };
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
// const settings = {
//     timestampsInSnapshots: true
// }
// db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const dashboardCollection = db.collection('dashboard')
const settingsCollection = db.collection('settings')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    dashboardCollection,
    settingsCollection,
}