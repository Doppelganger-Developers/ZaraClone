'use client'
import React from "react";
import Link from "next/link";
const femmeCategory = () =>{
    return (

        <div className="container1">
            <div className="chemis"><Link href="/women">CHEMISES | BLOUSES</Link></div>
            <div className="t-shirts"><Link href="/women">T-SHIRTS | SWEATS</Link></div>
            <div className="tops"><Link href="/women">TOPS | BODYS</Link></div>
            <div className="maille"><Link href="/women">MAILLE</Link></div>
            <div className="pantalons"><Link href="/women">PANTALONS</Link></div>
            <div className="jeans"><Link href="/women">JEANS</Link></div>
            <div className="jupes"><Link href="/women">JUPES</Link></div>
            <div className="shorts"><Link href="/women">SHORTS</Link></div>
            <div className="chaussures"><Link href="/women">CHAUSSURES</Link></div>
            <div className="sacs"><Link href="/women">SACS</Link></div>
            <div className="accessoires"><Link href="/women">ACCESSOIRES | BIJOUX FANTAISIE</Link></div>
            <div className="bikinis"><Link href="/women">BIKINIS | MAILLOTS DE BAIN</Link></div>
            <div className="parfums"><Link href="/women">PARFUMS</Link></div>
            <div className="beauty"><Link href="/women">BEAUTY</Link></div>
            <div className="total"><Link href="/women">TOTAL LOOK</Link></div>
            <div className="tailleurs"><Link href="/women">TAILLEURS</Link></div>
            <div className="special"><Link href="/women">SPECIAL PRICES</Link></div>
            
        </div>
    )
}
export default femmeCategory