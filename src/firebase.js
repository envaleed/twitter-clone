import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAD28nhBSFEHXRhLia-MxDLvym_dE86zWo",
    authDomain: "twitter-clone-81727.firebaseapp.com",
    databaseURL: "https://twitter-clone-81727.firebaseio.com",
    projectId: "twitter-clone-81727",
    storageBucket: "twitter-clone-81727.appspot.com",
    messagingSenderId: "20217219889",
    appId: "1:20217219889:web:ebdd04950ad414b8623e10",
    measurementId: "G-P8V1DRJM3K"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
  
export default db;