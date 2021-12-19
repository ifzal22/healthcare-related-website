import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='container-fluid Body'>
          <div className='row'>
<div className='col-md-6 col-6 col-sm-6'>
<div className='d-flex align-items-center'>
    <img src="https://i.ibb.co/hLg91YK/img-jpg-removebg-preview.png" alt="" />
    <h2>Healthy Life</h2>
</div>
<p>
Physical fitness is not the sole basis of being healthy; being healthy means being mentally and emotionally fit. Being healthy should be part of your overall lifestyle. Living a healthy lifestyle can
</p>
<p>
<i class="fas fa-map-marker-alt"></i> 
     <span className='mx-2'>Sylhet Bangaldesh </span> </p>


  <div className='SOCIAl'>
  <i class="fab fa-facebook-square"></i>
  <i class="fab fa-youtube"></i>
  <i class="fab fa-facebook-messenger"></i>
  </div>
</div>

<div className='col-md-6 col-sm-6 col-6'>
<h3 className='py-3'>Contact</h3>
<div>
    <p>Name</p>
    <input type="text" placeholder='Email' />
    <p>Email</p>
    <input type="email" placeholder='Email' />
    <p>Comment</p>
    <textarea rows="4" cols="50" name="comment" form="usrform">
Enter text here...</textarea>


</div>
</div>
          </div>
        </div>
    );
};

export default Footer;