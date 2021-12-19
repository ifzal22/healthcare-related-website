import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [specificDetail, setSpecificDetail]=useState({});
    const {company,email,address,about,picture,phone}=specificDetail;

    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch("/healthCare.json")
            .then(res => res.json())
            .then(details => setDetails(details))
    }, [])
    

    useEffect(()=>{
if(details.length >0){

    const matchData = details.find(deatil =>deatil.id==id)
    setSpecificDetail(matchData)
}
}
,[details])

    

     


    return (
        <>

            <h1 className='text-center my-5 fw-normal text-success'>Service Details</h1>
            <div className='container'>
                <div className='row mx-auto text-center'>
<div className='col-md12 shadow mx-auto'>
    <div className='p-2'>
        <img src={picture} alt="" />
    </div>

    <div>
    <h2>{company} </h2>
    <p> <span className='font-weight-bold text-danger'>About:</span> {about} </p>
    <p ><span className='text-white bg-dark'>Email:</span> {email} </p>
    <p ><span className='text-white bg-dark'>Phone:</span> {phone} </p>
    <p> <span className='text-white bg-dark'>Address:</span> {address} </p>
    </div>



</div>
                </div>

            </div>
            
            
        </>
    );
};

export default Details;