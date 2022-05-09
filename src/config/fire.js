import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBtE_lmrNmjKVV02ivm8ePPGfwCKiRn60o",

    authDomain: "sampleloginform-72510.firebaseapp.com",
  
    projectId: "sampleloginform-72510",
  
    storageBucket: "sampleloginform-72510.appspot.com",
  
    messagingSenderId: "24532894317",
  
    appId: "1:24532894317:web:df4c7de1ed4be02d8d7564",
  
    measurementId: "G-222Q6WW8Q7"
  
};

const fire = firebase.initializeApp(config);
export default fire;