import React, { useEffect, useState } from 'react';
import Banner from '../Header/Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    const [data , setDate] = useState([]);
    useEffect( ()=>{
        fetch("./healthCare.json")
        .then(res =>res.json())
        .then (result=> setDate(result.slice(0,6)))
    },[]);

  
    return (
        <>
       
         

<Banner></Banner>

<div className='mt-5'>
    <h1 className='text-center'>Our Services</h1>
</div>
<div className='mx-auto row container'>
{
    data.map(datas=><Services key={datas._id} datas={datas}></Services>)
}
</div>

         
        
</>  
    );
};

export default Home;