import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch("/healthCare.json")
            .then(res => res.json())
            .then(details => setDetails(details))
    }, [])


    return (
        <>

            <h1 className='text-center my-5 fw-normal text-success'>Service Details</h1>
            <div className="row text-center p-5 container">
                
                <div className="col-md-6">
                    <img src={details[id]?.picture} className='img-fluid' alt="" />
                    <p>{details[id]}</p>
                </div>
                <div className="col-md-6 mx-auto text-start mt-5">
                    <h3><b>Name</b> : {details[id]?.name}</h3>
                    <h5><b>Ratings</b> : {details[id]?.Ratings}</h5>
                    <p><b>Description </b>: {details[id]?.desc}</p>
                </div>

            </div>
        </>
    );
};

export default Details;