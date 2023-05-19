"use client"
import { useEffect } from 'react';
import Link from 'next/link';
import React ,{ useState } from 'react';
import Router from "next/router"
import axios from 'axios'
import  "./globals.css"
import  "./login.css"
// interface Item {
//   productname: string;
//   productdescription: string;
//   productprice: Number;
//   productimg: string;
// }
function App() {
 
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');

  function sendProps() {
    console.log('hello');
    // Add your code here to send props
  }

  function search() {
    axios.get(`http://localhost:5000/api/products/`)
    .then((res)=>{
        setItems(res.data);
        setFilteredItems(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(()=>
  search
  ,[])
  console.log(items);
  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = items.filter((item) =>
      item.productname.includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
    if (filtered.length > 0) {
      const firstItem = filtered[0];
      setName(firstItem.productname);
      setDesc(firstItem.productdescription);
      setPrice(firstItem.productprice);
      setImg(firstItem.productimg);
    } else {
      setName('');
      setDesc('');
      setPrice('');
      setImg('');
    }
  };

  return (
    <div>
      <input
        className="searchinput"
        placeholder="searchByTypeOfQuote"
        value={searchTerm}
        onChange={(event) => handleSearch(event.target.value)}
      />
      <button onClick={() => handleSearch(searchTerm)}>Search</button>
      <Link href="/Details" onClick={sendProps}>
        {name}
      </Link>
      <div>
        <h3>{desc}</h3>
        <h3>{price}</h3>
        <img src={img} style={{ textAlign: 'center' }} alt="Product" />
      </div>
      {filteredItems.map((item) => (
        <div key={item.productname}>
          <h3>{item.productname}</h3>
          <h3>{item.productdescription}</h3>
          <h3>{item.productprice}</h3>
          <img src={item.productimg} style={{ textAlign: 'center' }} alt="Product" />
        </div>
      ))}
    </div>
  );
}

export default App;