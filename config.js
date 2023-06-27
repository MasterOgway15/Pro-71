import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCP1kLjq4qbxmhuHNy8WsOMoonFxSUWrM8",
    authDomain: "pro-71-4be8e.firebaseapp.com",
    projectId: "pro-71-4be8e",
    storageBucket: "pro-71-4be8e.appspot.com",
    messagingSenderId: "300468424129",
    appId: "1:300468424129:web:b201a231accf3cad307340"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
