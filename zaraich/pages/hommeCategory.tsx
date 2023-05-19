"use client"
import axios from "axios";
import React, { useState } from "react";
import Link from "next/link";

const HommeCategory = () => {
 

    return (
     
        <div className="container1">
        <div> <Link href="/men">EDITION</Link></div>
        <div className="nouveautes"><Link href="/men">NOUVEAUTÉS</Link></div>
        <div className="lin"><Link href="/men">LIN</Link></div>
        <div className="crochet"><Link href="/men">CROCHET</Link></div>
        <div className="basiqeus"><Link href="/men">BASIQUES</Link></div>
        <div className="costumes"><Link href="/men">COSTUMES</Link></div>
        <div className="chemises"><Link href="/men">CHEMISES</Link></div>
        <div className="t-shirts"><Link href="/men">T-SHIRTS</Link></div>
        <div className="blousons"><Link href="/men">BLOUSONS | SURCHEMISES</Link></div>
        <div className="pantalons"><Link href="/men">PANTALONS</Link></div>
        <div className="jeans"><Link href="/men">JEANS</Link></div>
        <div className="shorts"><Link href="/men">SHORTS</Link></div>
        <div className="sweats"><Link href="/men">SWEATS | HOODIES</Link></div>
        <div className="pulls"><Link href="/men">PULLS | GILETS</Link></div>
        <div className="total-look"><Link href="/men">TOTAL LOOK</Link></div>
        <div className="polos"><Link href="/men">POLOS</Link></div>
      </div>
    )
}

export default HommeCategory;