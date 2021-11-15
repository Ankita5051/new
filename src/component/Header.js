import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheet/Header.css';
export default function Header() {
    return (
        <>
              <div className="header">
              <div><h1><span className="brand-name"><span className="brand-let">Uni</span>Traveler</span> 
               </h1></div>
           
            <ul>     <li><Link to="../home">Home</Link></li>
                <li><Link to="../about">About</Link></li>
                <li><Link to="../package">Package</Link></li>
                <li><Link to="../facilities">Facilities</Link></li>
                <li><Link to="../contact">Contact us</Link></li>
            
            </ul>
            </div>
        </>
      
    )
}
