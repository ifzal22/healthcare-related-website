import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import logo from '../../image/2446910-ai.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='IMG mx-auto m-auto container justify-content-center align-items-center '>
            <div className='mx-auto'>
                <img src={logo} alt="" />


                <Link className="text-center" to="/"> <button className='btn btn-light btn-danger text-danger'>Go Back</button></Link>
            </div>


        </div>
    );
};

export default NotFound;