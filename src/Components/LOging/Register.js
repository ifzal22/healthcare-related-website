import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../Hooks/useAuth';

const Register = () => {
  const {HandelEmailChang,HandelPasswordChang,handelREgister,user,toggle,Handeltoggle,error ,handleName} = useAuth();
 console.log(handleName)
    return (
        <div className=''>
           <h1>{user.email} </h1>

           <div className='container mt-3'>
           <h1 className='text-center text-shadow text-warning'>Please Register</h1>
             <div className='container w-50  shadow-lg p-3'>




             <form onSubmit={handelREgister} className=''>
            <p>{error}</p>

             <div className="form-group m-2">
             <label for="exampleInputEmail1">User Name</label>
										<input onBlur={handleName} type="text"  className="form-control" placeholder="User Name" required />
									</div>
  <div class="form-group m-2">
    <label for="exampleInputEmail1">Email address</label>
    <input onBlur={HandelEmailChang} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group m-2">
    <label for="exampleInputPassword1">Password</label>
    <input onBlur={HandelPasswordChang} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
  </div>
  <div class="form-check m-2">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
{toggle? 
(<p className='text-primary' onClick={Handeltoggle}>are you new please register</p>)

:(
<p className='text-primary' onClick={Handeltoggle}> <Link to="/LOging">alredy have an account ?</Link> </p>)}
             </div>
           </div>
        </div>
    );
};

export default Register;