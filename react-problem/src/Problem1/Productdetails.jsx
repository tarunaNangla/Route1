

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {  useParams } from 'react-router-dom';


const  Productdetails = () => {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const params=useParams();
    useEffect(()=>{
        setLoading(true)
        const {id}=params;
        axios({
          url:`http://localhost:2022/data/${id}`,
          method: "get"
        }).then(res=>{
            // console.log(res.data);
           setData(res.data);
           setLoading(false)

        }).catch((error)=>{
            setLoading(false)
        })
    },[params])
    console.log(data)
  return (
    <div>
        <div>

         {loading && <div>Loading</div>}
        </div>
         <div key={data?.id}>
         <h1>Product details</h1>
        {/* {loading && <div>...loading</div>} */}
      <div>{data.category}</div>
      <div>{data.description}</div>
      <div><img src={data.image} alt="data" /></div>
       <div>{data.price}</div>
       <div>{data.rating}</div>
       <div>{data.title}</div>
         </div>
    </div>
  )
}

export default  Productdetails
