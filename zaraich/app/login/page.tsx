"use client"
import Link from 'next/link';

import { useState } from 'react';
import  "./globals.css"
import  "./login.css"
import axios from "axios"

import React from 'react';

const Login=()=>{

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [Error, setError] = useState<string>('');
  const [name, setname] = useState<string>('se conncter');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/user/login', {
        useremail: username,
        userpw: password
      });
     
      const token = response.data.token;


    localStorage.setItem('token',  response.data.token);
    setname(response.data.name);
      setError('Authentication successful')


    } catch (err:any) {
      console.log(err.response.data);
      setError(err.response.data)
    }
  };

    return (
       

  <div   className='container-login'>

  {/* <label for="fname">First Name</label> */}
  <div className='Left-login-form'>
  <h3 className='login-heading'>LOG IN TO YOUR ACCOUNT</h3>
 <div className='form-input-label'>
      <input  className='form-input-label'type="text" id="fname" name="email" placeholder='E-MAIL' value={username} onChange={(e) => setUsername(e.target.value)}/>
  </div>
  <div className='form-input-label'>
      <input  className='form-input-label' type="password" id="fname" name="password" placeholder='PASSWORD' style={{"outline":"none",'border':"none"}}  value={password} onChange={(e) => setPassword(e.target.value)}/>
  </div>

  <button  className="login-btn" onClick={handleLogin}>LOGIN </button> <br></br>
  <p>{Error}</p> <br></br>
  <a className="forgotpassword"href='#'>HAVE YOU FORGOTTEN YOUR PASSWORD?</a>

  </div>
 

<div className='right-login-form'>
<h4 >NEEED ACCOUNT</h4>
<Link  href="/create" className="create-btn" type="button" >CREATE ACCOUNT </Link>
  </div>

</div>
         
    
    )
}
export default Login