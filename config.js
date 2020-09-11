import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBj4XOWtHo_2_MbDWL0ZD1XGcbDmalbECI",
    authDomain: "barter-app-df844.firebaseapp.com",
    databaseURL: "https://barter-app-df844.firebaseio.com",
    projectId: "barter-app-df844",
    storageBucket: "barter-app-df844.appspot.com",
    messagingSenderId: "973197261150",
    appId: "1:973197261150:web:ad0bcb7aa88c91bf6c37cf",
    measurementId: "G-JYSER9X076"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
