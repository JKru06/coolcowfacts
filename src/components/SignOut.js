import React from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


const auth = firebase.auth();
const firestore = firebase.firestore();

function SignOut(props) {
  const user = firebase.auth().currentUser;
    return auth.currentUser && (
      <button class={props.class} onClick={() => auth.signOut()}>Sign Out</button>
    )
}

export default SignOut;