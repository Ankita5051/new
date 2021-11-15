import React from 'react'
import {Link} from 'react-router-dom'
import '../../stylesheet/Home.css'
import We from '../../img/We.jpg'
import Plan from '../../img/Plan.jpg'
import Card from '../components/Card'
import Guider from '../components/Guider'
import Offercard from '../components/Offercard'
import Gdetail from '../../data/Gdetail'
import CardsData from '../../data/CardsData'
import Costumer from '../components/Costumer'
export default function Home() {
    return (
        <>
            <div className="home">
            <div className="tech-slideshow">
  <div className="mover-1"></div>
  <div className="mover-2"></div>
</div>
           
        <div className="qutes">
        <div data-aos="zoom-in" data-aos-duration="500" >
        <p> <i className="fas fa-quote-left"></i>
        Travel does what good novelists also do to the life of everyday, placing it like a picture in a frame or a gem in its setting, so that the intrinsic qualities are made more clear.Travel does this with the very stuff that everyday life is made of, giving to it the sharp contour and meaning of art.
             
        <i className="fas fa-quote-right"></i>
</p></div>         </div>

<div className="offer" >
<h1 className="comman-head">Explore our latest offers</h1>
{/* offer card */}
<div className="offer-card-wrapper" >

{CardsData.map((val,index)=>{
    if(val.offer===1)
    return <Offercard key={val.id} id={val.id} title={val.title} description="Enjoy your vacation"
    imgsrc={val.imgsrc}   hotelCharge={val.hotelCharge} duration={val.duration} fliteCharge={val.fliteCharge}
     validity={val.validity}/>
   
})
}
</div>
{/* end of offer card */}
</div>

<div className="destination">
{/* <p  className="comman-head">Tours</p> */}

    <h1 className="comman-head">Our Top destination</h1>
{/* cards  */}
<div className="wrapper" >



{CardsData.map((val,index)=>{
    if((val.offer === 0)&&(index<7) )
    return    <Card id={val.id}title={val.title} description={val.desc} imgsrc={val.imgsrc}   hotelfee={val.hotelCharge}  duration={val.duration} flite={val.fliteCharge}/> 
})
}
</div>
{/* end of cards */}  
</div>

<div className="our-costomer">
<h2 className="comman-head">What our costomer says</h2><div className="line">
<div className="line-1"></div>
<div className="line-2"></div></div>
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <Costumer costomer="Alice" imgsrc={require('../../img/Costumer.jpg')} review="Our travel agent was excellent for us and considered our unique need and planned our itinerary. I would definitely like to travel with you again as you made our trip easy and stress-free. It was a delight to travel with unitravel.Thank you so much." />
        </div>
    <div className="carousel-item">
    
        <Costumer costomer="Wei Wei" imgsrc={require('../../img/Costumer.jpg')} review="Our travel agent was excellent for us and considered our unique need and planned our itinerary. I would definitely like to travel again as you made our trip easy and stress-free. It was a delight to travel with unitravel.Thank you so much." />
    </div>
    <div className="carousel-item">
    <Costumer costomer="Alene" imgsrc={require('../../img/Costumer.jpg')} review="Our travel agent was excellent for us and considered our unique need and planned our itinerary. I would definitely like to travel again as you made our trip easy and stress-free. It was a delight to travel with unitravel.Thank you so much." />
    </div>
  </div>
  <Link className="carousel-control-prev" to="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </Link>
  <Link className="carousel-control-next" to="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </Link>
</div>



</div>

<div className="little-about">
    <div className="l-a-img">
        <img src={We} alt=""/>
    </div>
    <div className="l-a-content">
        <h3>A Little about us</h3>
        <p>UniTraveler provide you best tourism experience as well as hotel facilities.</p>
    </div>
    <div className="l-a-img">
        <img src={Plan} alt=""/>
    </div>
    <div className="l-a-content">
        <h3>Travel plan</h3>
        <p>We are planing for you a travel for making your vacation happiest.</p>
    </div>
</div>
<div className="Our-guider"><h3>Our guider</h3>
<div className="guider-wrapper">

{Gdetail.map((val)=>
<Guider key={val.id}
guider={val.name} 
experience={val.experience} 
guidefor={val.guidefor}/>)}

</div></div>

            </div>
        </>
    )
}
