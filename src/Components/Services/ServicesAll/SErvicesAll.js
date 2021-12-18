import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './ServicesAll.css';

const SErvicesAll = () => {
   

    const [data , setDate] = useState([]);
    useEffect( ()=>{
        fetch("./healthCare.json")
        .then(res =>res.json())
        .then (result=> setDate(result.slice(3,15)))
    },[]);


    return (
        <div className='container px-5'>
            <div className='mt-5'>
    <h1 className='text-center'>Our Services</h1>
</div>
      < >

      {
    data.map(datas=><div className=' ' key={datas.id} datas={datas}>

<div className=' mx-2'>
<div className='text-center  radius-3 col-md-4 my-3 g-1 p-3  card-group'>
            <div className='card shadow p-3'>
            <div className='p-3'>
                    <img src={datas.picture} alt="" />
                </div>
                <div className='py-2 mt-2'>
                    <h3>{datas.company}</h3>
                    <p>{datas.about.slice(0, 100)}</p>
                    
                    <Link to={`/services/${datas.id}`}>
                        <button className='btn btn-primary'>Details</button>
                    </Link >
                </div>
            </div>
            </div>

</div>


    </div>)
}


      </>
        </div>
    );
};

export default SErvicesAll;