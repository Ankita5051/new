import React from 'react'
import {Link} from 'react-router-dom'
import '../../stylesheet/component/PackageCard.css';

export default function PackageCard(props) {
    return (
        <>
       
<div className="package-card">
    <div className="package-img" style={{backgroundImage:`url(${props.imgsrc})`}} >
<Link to={'./placedetail/'+(props.id)} ><i className="fas fa-link pac-link-icon"></i></Link>
    </div>
    
    <h3 className="comman-head">{props.packageName}</h3>
    <p> {props.packageDes}</p>
    <Link className="package-btn" to={'./placedetail/'+(props.id)} >See more</Link>
    <div className="line"></div>
{/* <h5></h5> */}
</div>
        </>
        
    )
}
