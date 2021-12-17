import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Services = (props) => {

    console.log(props);
    return (
        <>
            <div className='col-md-4 mx-auto p-3 border text-center g-3 mx-2'>
                <div>
                    <img src={props.datas.picture} alt="" />
                </div>
                <div className='py-2 mt-2'>
                    <h3>{props.datas.company}</h3>
                    <p>{props.datas.about.slice(0, 100)}</p>
                    <Link to={`/services/${props.datas.id}`}>
                        <button className='btn btn-primary'>Details</button>
                    </Link >
                </div>
            </div>
        </>
    );
};

export default Services;