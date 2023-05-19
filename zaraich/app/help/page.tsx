"use client"
import { useEffect, useState } from 'react';
import axios from "axios";
import React from 'react';


const Help=()=>{
    const [data,setData]=useState<any>([])
const gethelp=()=>{
    axios.get("http://localhost:5000/api/help")
    .then((suc)=> setData(suc.data))
    .catch((err:string)=> console.error(err))
}
console.log(data)
    useEffect(() => {
        gethelp();
      }, []);

      return (
        <div className='helpContainer'>
            <div className='helpQ'>COMMENT POUVONS-NOUS VOUS AIDER ?</div>
           <input type='search' placeholder='RECHERCHER' className='SearchInput'/>
            <div className='Line'></div>
        </div>
      )
}
export default Help