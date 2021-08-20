import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAuxEDpvp1UfvaT25SYtmE9F0ByhRXLlzc",
    authDomain: "todo-list-318ed.firebaseapp.com",
    projectId: "todo-list-318ed",
    storageBucket: "todo-list-318ed.appspot.com",
    messagingSenderId: "232839084452",
    appId: "1:232839084452:web:b5b3f67c40c4bf10c82931"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db };