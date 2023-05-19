"use client"
import { useEffect, useState } from 'react';
import axios from "axios"
import React from 'react';
import "./page.css"
import "./globals.css"

const Help=()=>{
    const [data,setData]=useState<any>([])
const gethelp=()=>{
    axios.get("http://localhost:5000/api/help")
    .then(suc=> setData(suc.data))
    .catch(err=> console.error(err))
}
console.log(data)
    useEffect(() => {
        gethelp();
      }, []);
return(
    <div>
       <div >
                <h4 className='head'>HOW CAN WE HELP YOU?</h4>
            {
      <input
        type="text"
        value=""
        placeholder="Search"
      />}
    </div>  
    </div>

           
) 
}
export default Help