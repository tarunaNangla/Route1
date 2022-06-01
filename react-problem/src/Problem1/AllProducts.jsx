import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

const AllProducts = () => {
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(false);
  useEffect (()=>{
    axios({
      url:"  http://localhost:2022/data",
      method:"get"
    }).then(res=>{
      setData(res.data);

    }).catch(error=>{
      setLoading(false)
    })
  },[])
  console.log(data)
  return (
    <div className='griddata'>
      {
        data.map((ele)=>{
          return(
            <div key={ele.id}>
                    <div>Product Name :{ele.title}</div>
                    <div>Price: {ele.price}</div>
                    <Link to={`/products/${ele.id}`}>more details</Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default AllProducts
