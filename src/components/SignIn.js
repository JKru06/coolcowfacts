import React from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyAwfM2WCxQHKCojm4xGGxthQTk5DY8ggrg",
    authDomain: "cool-cow-facts.firebaseapp.com",
    projectId: "cool-cow-facts",
    storageBucket: "cool-cow-facts.appspot.com",
    messagingSenderId: "507008267716",
    appId: "1:507008267716:web:85c4e353edc789906fe091",
    measurementId: "G-HJW6DFFHT1"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function SignIn(props) {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <>
        <button class={props.class} onClick={signInWithGoogle}>{props.message}</button>
      </>
    )
  
}

export default SignIn;