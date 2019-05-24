import firebase from 'firebase'

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBtV9-5PWMsgLwdpwKbOTTkMqQ_qHyc0TU",
  authDomain: "jc08yosuanative.firebaseapp.com",
  databaseURL: "https://jc08yosuanative.firebaseio.com",
  projectId: "jc08yosuanative",
  storageBucket: "jc08yosuanative.appspot.com",
  messagingSenderId: "738854888632",
  appId: "1:738854888632:web:12a8202448d9abc5"
};
  // Initialize Firebase
  export const Fire = firebase.initializeApp(firebaseConfig);