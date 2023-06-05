import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDS6vOCLzTVjBXTDXrvBjEnSb_YSoCyHDk",
    authDomain: "disney-clone-a4dda.firebaseapp.com",
    projectId: "disney-clone-a4dda",
    storageBucket: "disney-clone-a4dda.appspot.com",
    messagingSenderId: "704890205616",
    appId: "1:704890205616:web:092327600b79ca0e611275",
    measurementId: "G-5FLBGMJYF4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage};
export default db;