// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCDu515oQCekxFFKAo4_ekrqObDMRdaPy0',
  authDomain: 'mynewapp-b7904.firebaseapp.com',
  projectId: 'mynewapp-b7904',
  storageBucket: 'mynewapp-b7904.appspot.com',
  messagingSenderId: '514313774511',
  appId: '1:514313774511:web:11af6a1e45d36647163b5a',
  measurementId: 'G-H10Z5M9BCN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
