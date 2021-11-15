import React from 'react'
import '../../stylesheet/component/Card.css'
import {Link} from 'react-router-dom'
export default function Card(props) {
    return (
        <>
        
    <div className="product"data-aos="zoom-in" data-aos-duration="500">
    <div className="img-wrapper">
    <img src={props.imgsrc} className="product-img" alt=""/>

    </div>
            
            <div className="detail">
            <h3 className="name">{props.title}</h3>
            <p className="para">{props.description} 
<br/>
          <i className="far fa-calendar-alt icon"></i>  &nbsp;{props.duration}
      <i className="fas fa-plane icon"></i>  &nbsp;<i className="fas fa-rupee-sign rupee"></i>{props.flite}
            &nbsp;<i className="fas fa-bed icon"></i>  &nbsp;<i className="fas fa-rupee-sign rupee"></i>&nbsp;{props.hotelfee}/night</p>
      </div>
        <Link to={'./placedetail/'+(props.id)} className="btn">
            Book Now
            </Link>
    </div>
        </>
    )
}
