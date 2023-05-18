"use client"
import React,{useState} from 'react';
import Link from 'next/link';
import './globals.css';
import './index.css';



const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
console.log(sidebarOpen);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div>
 
<div className="slider">
<nav className="navBar fixed top-0 z-10 w-full  ">
        <div className=" flex justify-between items-center p-5">
          <div className="grid gap-1 grid-cols-2">
            <div>
              <Link href="/">
                
                  <svg viewBox="0 0 100 80" width="25" height="25" onClick={handleToggleSidebar}>
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
     
      {sidebarOpen && (

<div className="sidebar fixed top-0 z-10">
  <div className='container'>
  <svg width="20  px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>setSidebarOpen(!sidebarOpen)} className='closeSvg'>
<g id="Menu / Close_LG">
<path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
<div className='elements'>
  <a href="/" >FEMME</a>
  <a href="/">HOMME</a>
  <a href="/">ENFANTS</a>
  <a href="/">BEAUTY</a>
  </div>
</div>
</div>
)}
      <div className="slide">
          <video className="slide-video" autoPlay loop muted>
            <source src="../public/video_zarahome.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
      </div>
    </div>
  );
}
export default Home;
