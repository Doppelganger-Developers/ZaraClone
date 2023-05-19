"use client"
import { useEffect } from 'react';
import Link from 'next/link';
import { useState } from 'react';
import Router from "next/router"



import axios from 'axios'
import  "./globals.css"
import  "./login.css"
function App() {
  const [items, setItems] = useState([]); // Set the type for the items state
  const [searchh, setSearch] = useState<string>('');
  const [items2, setItems2] = useState<string>('');; // Set the type for the items state


  function sendProps() {
    console.log('hello')
    Router.push({
      pathname: '/Details',
      query: {
        items: JSON.stringify(items)
      }
    });
  }
 
 
  function search(id:String){
    axios.get(`http://localhost:5000/api/products/${id}`)
    .then((res)=>{

        setItems(res.data)
        setItems2(res.data[0].productname)

        console.log(res.data)
      })
      .catch((err)=>{console.log(err)})  
}

const handleSearch=()=>{
  search(searchh)
 }

  return (
    <div>
    <input className="searchinput" placeholder="searchByTypeOfQuote" defaultValue={searchh}  onChange={(event)=>setSearch(event.target.value)} />
      <button onClick={()=>handleSearch()}>Search</button>
      <Link href="/Details"onClick={()=>sendProps()}  >{items2}</Link>
    </div>
  );
};

export default App;
