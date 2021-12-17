import React from 'react';

const Register = () => {
    return (
        <div className=''>
           

           <div className='container mt-3'>
           <h1 className='text-center text-shadow text-warning'>Please Register</h1>
             <div className='container w-50  shadow-lg p-3'>
             <form className=''>
  <div class="form-group m-2">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group m-2">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check m-2">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
             </div>
           </div>
        </div>
    );
};

export default Register;