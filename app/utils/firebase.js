import firebase from "firebase/app";

// app Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcNvKGqw0QgsTIbBJtBgd2fasmUD-zkXM",
  authDomain: "myfirstbank-a3ebf.firebaseapp.com",
  projectId: "myfirstbank-a3ebf",
  storageBucket: "myfirstbank-a3ebf.appspot.com",
  messagingSenderId: "620008695428",
  appId: "1:620008695428:web:cb6950e5da7f42f032c4d1"
};


export const firebaseApp = firebase.initializeApp(firebaseConfig);