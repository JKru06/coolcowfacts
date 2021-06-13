import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function Modal() {

    const [Email, setEmail] = useState('');
    const [Fact, setFact] = useState('');
    const [Source, setSource] = useState('');

    const handelSubmit = (e) => {
        e.preventDefault();
        const newFact = {Email, Fact, Source};
        axios.post('https:coolcowfacts.herokuapp.com/create', {
            Fact: newFact
        })
        .then(function (response) {
            console.log(response);
        })
    }



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
                        <label for="InputEmail" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="enter your email..." value={Email} onChange={(e) => setEmail(e.target.value)} required></input>
                    </div>
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
}

export default Modal