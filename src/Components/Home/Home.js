import React, { useEffect, useState } from 'react';
import Banner from '../Header/Banner/Banner';
import Services from '../Services/Services';
import './Home.css';

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


<div className='mx-3 my-5 container '>

<h1 className='text-center'> Emergency Service</h1>
  
<div className='row container'>

<div className='col-md-6 shadow-lg text-center mx-auto'>
    <div className='p-3'>
        
     <img src="https://media.istockphoto.com/vectors/ambulance-flat-icon-medicine-and-healthcare-transport-sign-vector-a-vector-id843297940?k=20&m=843297940&s=612x612&w=0&h=Dmzm4jWmVh5Yc8k7zQYUjVLJo7G8bAFStp_6yAGo9IE=" alt="" />
    </div>

<div>
<h1>
ambulance Service
</h1>
<p><span className='text-denger'>Phone: </span>0188888338838 </p>
</div>


</div>
</div>  
</div>

        
</>  
    );
};

export default Home;