import React from 'react'
import '../../stylesheet/Facilities.css'
import RoomCard from '../components/RoomCard'
import Garden from '../../img/Garden.jpg'
import Food from '../../img/Food.jpg'
import Icon1 from '../../img/Icon1.png'
import Icon2 from '../../img/Icon2.png'
import Icon3 from '../../img/Icon3.png'
import { Link } from 'react-router-dom'
import RoomData from '../../data/RoomData'
export default function Facilities() {
    return (
        <>
            <div className="facilities-banner">
                {/* <h1 className="comman-head"></h1> */}
            </div>


            <div className="qutes">
        <div data-aos="zoom-in" data-aos-duration="500" >
        <p> <i className="fas fa-quote-left"></i>We provide you a guide during your whole journy and also provide hotel for staying and food service. Simply the most that defines you have ever stayed at.
        <i className="fas fa-quote-right"></i>
</p></div>         </div>

            <div className="room-box">


<h1 className="comman-head">Our suite</h1>
<div className="room-wrapper">


{RoomData.map((val)=>{

return <RoomCard key={val.id}guest={val.guest} rimg={val.imgsrc} bath={val.bath} bed={val.bed} roomName={val.type} prise={val.prise}
roomDes={val.des}/>
})}


</div>

</div>

<div className="facilities-detail">
<div className="facilities-img">
    <img src={Food} alt=""/>
    <img src={Garden} alt=""/>
</div>
<div className="facilities-content">
    <h1 className="comman-head">Beautiful hotel </h1>
    <p>Facilities is a reason for choosing any hotel by travellers. And we provide you all facilities which you expect to us. We provide you Garden, fresh food.</p>
    
    <div className="facilities-icon">
    <div  >
<img src={Icon1} alt=""/>
<h3 className="comman-head">Check in-out</h3>
<p>Easy and Short procedure of check in and check-out.</p>
<Link to="/"></Link>

    </div>
    <div  >
    <img src={Icon2} alt=""/>
<h3 className="comman-head">Premium</h3>
<p>You have to pay for every facilities which we provide you </p>
<Link to="/"></Link>
    </div>
    <div  >
<img src={Icon3} alt=""/>
<h3 className="comman-head">Fast travel</h3>
<p> UniTraveler provides you fast traveling service. </p>
<Link to="/" ></Link>
    </div>
    </div>
</div>
</div>
        </>
    )
}
