import Link from 'next/link';
import  "./globals.css"
import  "./login.css"

import React from 'react';

const Login=()=>{
    return (
        <div>
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
      <>

  <form   className='container-login'>

  {/* <label for="fname">First Name</label> */}
  <div className='Left-login-form'>
  <h3 className='login-heading'>Login</h3>
 <div className='input-text-box'>
      <input  className="input-text"type="text" id="fname" name="email" placeholder='E-MAIL'/>
  </div>
  <div className='input-text-box'>
      <input  type="password" id="fname" name="password" placeholder='PASSWORD' style={{"outline":"none",'border':"none"}}/>
  </div>

  <a className="forgotpassword"href='#'>HAVE YOU FORGOTTEN YOUR PASSWORD?</a>
  <button type="submit" className="login-btn" >LOGIN </button>
  </div>
 

<div className='right-login-form'>
<h4 >REGISTER</h4>
<p>IF YOU STILL DON'T HAVE A ZARA.COM ACCOUNT, USE THIS OPTION TO ACCESS THE REGISTRATION FORM.</p>

<p className='right-p' >BY GIVING US YOUR DETAILS, PURCHASING IN ZARA.COM WILL BE FASTER AND AN ENJOYABLE EXPERIENCE.</p>

<Link  href="/login" className="create-btn" type="button" >CREATE ACCOUNT </Link>
  </div>

</form>

<div className='signup-footer'>
<div className="list-group">
<h6 className='header-heading'>HELP</h6>
  <a href="#" className="list ">SHOP AT ZARA.COM</a>
  <a href="#" className="list ">PRODUCT</a>
  <a href="#" className="list">PAYMENT</a>
  <a href="#" className="list">SHIPPING</a>
 
  <a href="#" className="list"> EXCHANGES AND RETURNS</a>
  <a href="#" className="list">SHOPS AND COMPANY</a>
  <a href="#" className="list">CLOTHES COLLECTION</a>
  <a href="#" className="list">PROGRAMME</a>
   </div>


   <div className="list-group">
<h6 className='header-heading'>FOLLOW-US</h6>
  <a href="#" className="list "> NEWSLETTER</a>
  <a href="#" className="list ">INSTAGRAM</a>
  <a href="#" className="list">FACEBOOK</a>
  <a href="#" className="list">TWITTER</a>
  <a href="#" className="list"> PINTEREST</a>
  <a href="#" className="list">YOUTUBE</a>
   </div>
   </div>
         </>
    </div>
    )
}
export default Login