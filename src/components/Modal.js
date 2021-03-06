import React from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import axios from 'axios';
import { useState } from 'react';
import SignIn from './SignIn'
const qs = require('qs')

const auth = firebase.auth();

function Modal() {
    const account = useAuthState(auth).currentUser;

    const Email = account[0].email;
    const [Fact, setFact] = useState('');
    const [Source, setSource] = useState('');

    

    const handelSubmit = (e) => {
        e.preventDefault();
        const newFact = {Email, Fact, Source};
        axios({
            method: 'post',
            url: 'https://coolcowfacts.herokuapp.com/create',
            data: {
                "fact": {newFact}
            },
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    var user = firebase.auth().currentUser;

    if (user) {
          // User is signed in.
          return (
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add a Fact</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={handelSubmit}>
                            <div class="mb-3">
                                <label for="InputFact" class="form-label">Fact</label>
                                <input type="text" class="form-control" id="InputFact" aria-describedby="emailHelp" placeholder="enter your fact..." value={Fact} onChange={(e) => setFact(e.target.value)} required></input>
                            </div>
                            <div class="mb-3">
                                <label for="InputSource" class="form-label">Source</label>
                                <input type="url" class="form-control" id="InputSource" aria-describedby="emailHelp" placeholder="enter your source..." value={Source} onChange={(e) => setSource(e.target.value)} required></input>
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-outline-dark">Submit</button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
          )
    } else {
          // No user is signed in.
          return (
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Sign in</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <SignIn class="btn btn-outline-dark" message="Sign in with Google" />
                    </div>
                    </div>
                </div>
            </div>
          )
        }
    }

export default Modal
