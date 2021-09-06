import React from 'react';
import SignIn from './SignIn'

function LogIn() {

  return (
    <div class="modal fade" id="LogIn" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Sign in</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <SignIn />
            </div>
            </div>
        </div>
    </div>
  ) 
}



export default LogIn