// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwCFHgZ2KcPI2caDo-jlLWRZSpMTi01ss",
    authDomain: "dsgp-group-7-35c14.firebaseapp.com",
    projectId: "dsgp-group-7-35c14",
    storageBucket: "dsgp-group-7-35c14.appspot.com",
    messagingSenderId: "495963831416",
    appId: "1:495963831416:web:aa1c0ab24d7ac13fa7c18d",
    measurementId: "G-9F7SZMFHEG"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
