import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import useFirebaseApp from '../Hooks/useFirebase';
import './Header.css';

const Header = () => {
  const { user, handelLOgOut } = useFirebaseApp();

  return (
    <div className=''>
      {/* NaVIGAtion */}


      <nav className="navbar navbar-expand-lg  bg-light  navbar-light ">
        <div className="container-fluid">
          <div className="w-10 image d-flex justify-content-center text-center  imgText" >

            <img src="https://i.ibb.co/hLg91YK/img-jpg-removebg-preview.png" alt="" />
            <div><h3 className='titleh3'>Healthy Life</h3></div>

          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  NAVVER" id="navbarResponsive">
            <ul className="navbar-nav ms-auto justify-content-center ">
              <li className="nav-item active">
                <Link className="nav-link NAVHOVER " to="/home" style={{}} href="#">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link NAVHOVER" to="/ServicesAll" >Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link NAVHOVER" href="#" to="/about">About</Link>
              </li>

              <li className="nav-item ">
                <Link className="nav-link NAVHOVER" href="#" to="/contact">Contact</Link>
              </li>




              {user?.email ? (<li onClick={handelLOgOut} className="nav-item text-deanger">
                <Link className="nav-link text-danger NAVHOVER" href="#" to="/loging">LogOut</Link>
              </li>)
                :
                (<li className="nav-item">
                  <Link className="nav-link NAVLINK NAVHOVER" href="#" to="/loging">Loging</Link>
                </li>)}





              <li className="nav-item ">
                <Link className="nav-link" href="#" to="/home">     {user.displayName}</Link>
              </li>



            </ul>
          </div>
        </div>
      </nav>



    </div>


  );
};

export default Header;