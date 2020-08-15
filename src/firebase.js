import firebase from 'firebase';
const firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyCFZBndUTeewSejIiKZCoWYcZTHKnD0064",
    authDomain: "clone-da1cb.firebaseapp.com",
    databaseURL: "https://clone-da1cb.firebaseio.com",
    projectId: "clone-da1cb",
    storageBucket: "clone-da1cb.appspot.com",
    messagingSenderId: "117178356808",
    appId: "1:117178356808:web:50f7bfd233ce068519b47d"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};