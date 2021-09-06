import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Facts from "./Facts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App" class="app">
      <Header />
      <div class="main">
        <Facts />
        <Modal />
      </div>
      <Footer />
    </div>
  );
}

export default App;