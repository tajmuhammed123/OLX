import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlcJF8glHsDHMwtxVFyI805yth0Tzh9Ec",
    authDomain: "olxdemo-93515.firebaseapp.com",
    projectId: "olxdemo-93515",
    storageBucket: "olxdemo-93515.appspot.com",
    messagingSenderId: "298535106124",
    appId: "1:298535106124:web:36755511d749145680a6e9",
    measurementId: "G-C54DK5QXWQ"
  };

export default firebase.initializeApp(firebaseConfig)