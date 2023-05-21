"use client"
import axios from "axios"
import React,{ useEffect, useState } from 'react';
import  "./globals.css"

const Men=()=>{
    const [data,setData]=useState([])
    const fetchCategory=()=>{
    axios.get(`http://localhost:5000/api/p/Men`)
    .then(suc=>setData(suc.data))
    .catch(err=>console.log(err))
      }
useEffect(()=>{
    fetchCategory()
},[])
console.log(data)
    return(
        <div>
            {
                data.map(e=><div key={e.productid}>
                    <img className="prodimg" src={e.productimg} alt="" />
                    <div className="parent">
                    <div className="prodname">{e.productname}</div>
                    <div className="prodprice">{e.productprice} TND</div>
                    </div>
                    
                    </div>  
                    )
            }
        </div>
    )
}
export default Men