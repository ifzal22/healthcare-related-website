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
        < >
            <div className='mt-5'>
    <h1 className='text-center'>Our Services</h1>
</div>
      <div className='container'>

     <div className='row'>
     {
    data.map(datas=><div   className='col-md-4 col-12 '
    
    key={datas.id} datas={datas}>

<>

            <div className=' shadow p-3  mx-auto p-3 border text-center g-3 mx-2 MARG'>
            <div className='p-3'>
                    <img src={datas.picture} alt="" />
                </div>
                <div className='py-2 mt-2'>
                    <h3 className='font-weight-bold'>{datas.company}</h3>
                    <p>{datas.about.slice(0, 100)}</p>
                    <span text-buld>Phone: {datas.phone} </span>
                    
                 
                </div>
                <Link to={`/services/${datas.id}`}>
                        <button className='btn btn-primary'>Details</button>
                    </Link >
            </div>

</>


    </div>)
}



     </div>
      </div>
        </>
    );
};

export default SErvicesAll;