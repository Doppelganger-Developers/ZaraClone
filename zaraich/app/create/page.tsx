
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
    <nav className="">
        <div className="flex justify-between items-center p-5">
          <div className="grid gap-1 grid-cols-2">
            <div>
              <Link href="/">
                  <svg viewBox="0 0 100 80" width="25" height="25">
                    <rect width="70" height="5"></rect>
                    <rect y="30" width="70" height="5"></rect>
                    <rect y="60" width="70" height="5"></rect>
                  </svg>
              </Link>
            </div>
            <Link href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png" />
            </Link>
          </div>
          <div className="left-logos">
            <div className="recherche">
              <Link href="/search">
                RECHERCHER
              </Link>
            </div>
            <Link href="/login">
              SE CONNECTER
            </Link>
           
            <Link href="/help">
              AIDE
            </Link>
            
            <Link href="/cart">
              
                {" "}
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bag"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />{" "}
                </svg>
              
            </Link>
          </div>
        </div>
      </nav>
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