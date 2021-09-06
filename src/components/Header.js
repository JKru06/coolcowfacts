import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import React from 'react'
import SignIn from "./SignIn";
import SignOut from "./SignOut";

function Dropdown() {
    const user = firebase.auth().currentUser;
    return (
         <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {user.displayName}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">My facts</a></li>
            <li><a class="dropdown-item" href="#">Admin</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><SignOut class="dropdown-item btn btn-link text-dark" /></li>
          </ul>
        </li>
    )
}

function Header() {
const user = firebase.auth().currentUser;
    const handelSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">Cool Cow Facts</a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="btn btn-link nav-link active" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Submit Fact
                        </button>
                    </li>
                </ul>
                    <form onSubmit={handelSubmit}>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        { user ? <Dropdown /> : <SignIn class="btn btn-link nav-link active text-dark" message="Sign In" /> }
                        </ul>
                    </form>
            </div>
        </div>
    </nav>
  )
}

export default Header