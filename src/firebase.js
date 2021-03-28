import firebase from "firebase"
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDsp7oE25rtINq0trcFJreMbEyuf8VAr78",
  authDomain: "devinproject.firebaseapp.com",
  databaseURL: "https://devinproject-default-rtdb.firebaseio.com",
  projectId: "devinproject",
  storageBucket: "devinproject.appspot.com",
  messagingSenderId: "157466068422",
  appId: "1:157466068422:web:dac0f4da03d873aab49ec7",
  measurementId: "G-6NXLGMNNNP"
});

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db , auth , storage}