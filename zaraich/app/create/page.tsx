
"use client"
import  "./globals.css"
import './Signup.css'
import  "./login.css"
import Link from 'next/link';
import { useState } from 'react';
import axios from "axios"
import React from 'react';

function Signup() {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<string>("");
  
    const handleSubmit = () => {
      axios.post("http://localhost:5000/api/user", {
        username: name,
        useremail: email,
        userpw: password
      })
      .then(suc => {
        console.log(suc);
        setError('CREATED')
      })
      .catch(err => {
        console.log(err);
        setError(err.response.data);
      });
    };
      

  return (
    <>
    
   <h2 className='headingform'>PERSONAL DETAILS</h2>
   <div className='changeform-btn'>
   </div>
   <h1>{error}</h1>
<div className='container'>
  <div className='Left-form'> 
  <div className='input-text-box'>
      <input    className="input-text"type="text" id="fname" name="email" placeholder='E-MAIL'  value={email} onChange={(e) => setEmail(e.target.value)} />
  </div>
  <div className='input-text-box'>
      <input   type="password" id="fname" name="password" placeholder='PASSWORD'  value={password} onChange={(e) => setPassword(e.target.value)} />
  </div>
  <div className='input-text-box1'>
   </div>
  <div className='checkbox'>
    <div>
      <input className="form-input-checkbox__input" type="checkbox" name="newsletterCheck" data-qa-input-qualifier="newsletterCheck" value="false"/>
    </div>
  <div>
  <h6 className="checkbox__label">I want to receive personalised commercial communications from ZARA by email.</h6>
  </div>
  </div>

  <div className='checkbox'>
    <div>
      <input className="form-input-checkbox__input" type="checkbox" name="newsletterCheck" data-qa-input-qualifier="newsletterCheck" value="false"/>
    </div>
  <div>
  <h6 className="checkbox__label">I have read and understand the Privacy and Cookies Policy</h6>
  </div>
  </div>
  <input type="submit" className='signupbtn' value="CREATE ACCOUNT" onClick={handleSubmit}/>
  </div> 
 
 <div className='right-form'>
<div className='input-text-box'>
      <h1 className='dot'>.</h1>
  </div>
<div className='input-text-box2'>
      <input type="password" id="fname" name="fname" placeholder='REPEATE PASSWORD'/>
  </div>

  <div className='input-text-box'>
      <input type="text" id="fname" name="fname" placeholder='NAME' value={name} onChange={(e) => setName(e.target.value)}/>
  </div>
  <div className='input-text-box'>
      <input type="text" id="fname" name="fname" placeholder='SURNAME'/>
  </div>
  <div className='input-text-box'>
  </div>
</div> 
</div>
</>
  );
}

export default Signup;