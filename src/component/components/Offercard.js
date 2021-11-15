import React from 'react'
import {Link} from 'react-router-dom'
import '../../stylesheet/component/Offercard.css'
//import PlaceData from '../../data/PlaceData'
//import PlaceDetail from './PlaceDetail'
// const clickhandler=(=>{
  
//     PlaceData.map((val)=>{
//         //console.log(val.id)
//         if((val.id) === id){
//             console.log("hii")
//          //   console.log(val.id)
//          return <PlaceDetail title={val.title}/>
//         }
//         else return 1
//     })
// }
export default function Offercard(props) {
       return (
        <>
            <div className="card" data-aos="zoom-in" data-aos-duration="500">
<div className="imgbox">
    <img alt="" src={props.imgsrc}/>
</div>
<h3 className="cardname">{props.title}</h3>
<div className="content">
<h3>{props.title}</h3>

<p className="para">Get 10% off on your {props.title} trip. offer is valid for {props.validity}days only.  {props.description} in {props.title} with our best offer. Lets explore offer and book now.

<br/><i className="far fa-calendar-alt of-icon"></i>:&nbsp;{props.duration}&nbsp;&nbsp;&nbsp;
<i className="fas fa-plane of-icon"></i>:&nbsp;<i className="fas fa-rupee-sign rupee"></i>{props.fliteCharge}
&nbsp;&nbsp;&nbsp;<i className="fas fa-bed of-icon"></i>:&nbsp;<i className="fas fa-rupee-sign rupee"></i>{props.hotelCharge}/night</p>
<Link to={'./placedetail/'+(props.id)} className="explore">Explore</Link>

{/* <button onClick={clickhandler}>Explore</button> */}
</div>
</div>
        </>
      
    )
}
