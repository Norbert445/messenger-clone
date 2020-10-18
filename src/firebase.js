import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAQ5Kp3ubJ8KF9eW5lYld1J4pwb-fvU3qg",
  authDomain: "messenger-clone-aae7c.firebaseapp.com",
  databaseURL: "https://messenger-clone-aae7c.firebaseio.com",
  projectId: "messenger-clone-aae7c",
  storageBucket: "messenger-clone-aae7c.appspot.com",
  messagingSenderId: "58214799671",
  appId: "1:58214799671:web:34ad2564fd862adda8a2b2",
  measurementId: "G-Z18MVMHMHJ",
});

const db = firebaseApp.firestore();

export default db;
