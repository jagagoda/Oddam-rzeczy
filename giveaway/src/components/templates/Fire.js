import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCNylzrr7r3a9jKMCuWjbiFC8Dg6TpoUrw",
    authDomain: "give-away-3662a.firebaseapp.com",
    projectId: "give-away-3662a",
    storageBucket: "give-away-3662a.appspot.com",
    messagingSenderId: "902295348962",
    appId: "1:902295348962:web:c1d472de1947375d4da0bb",
    measurementId: "G-3Y8VPQV9RP"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;