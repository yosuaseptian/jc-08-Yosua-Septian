import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBp-AfRS-vEht3u9VUv5Y4tSxTIoXpufVs",
    authDomain: "ilhamreactnative.firebaseapp.com",
    databaseURL: "https://ilhamreactnative.firebaseio.com",
    projectId: "ilhamreactnative",
    storageBucket: "ilhamreactnative.appspot.com",
    messagingSenderId: "122541017827",
    appId: "1:122541017827:web:3c575c682eda571c"
  };
  // Initialize Firebase
  export const Fire = firebase.initializeApp(firebaseConfig);