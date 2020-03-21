// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyCHOoy2lYrjQMuPw9ffakzAkZVyRbqdvqE',
  authDomain: 'igneous-fort-228922.firebaseapp.com',
  databaseURL: 'https://igneous-fort-228922.firebaseio.com',
  projectId: 'igneous-fort-228922',
  storageBucket: 'igneous-fort-228922.appspot.com',
  messagingSenderId: '150718324245',
  appId: '1:150718324245:web:d7e3b24db512b0cf23381c',
  measurementId: 'G-0Q9CQ2Y9DB'
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;
