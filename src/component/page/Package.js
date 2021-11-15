import React from 'react'
import '../../stylesheet/Package.css'
import PackageCard from '../components/PackageCard'
import Offercard from '../components/Offercard'
import RoomData from '../../data/RoomData'
import RoomCard from '../components/RoomCard'
import CardsData from '../../data/CardsData'
export default function Package() {
    return (
        <>
                   <div className='package-banner'>
               <h1 className="package-banner-head">
                   Make true your dream vacation
               </h1>
                    </div>

<div className="qutes">
<div data-aos="zoom-in" data-aos-duration="500" >
    <p><i className="fas fa-quote-left"></i>Life is all about adventure, so pack your bags and start the tour.<i className="fas fa-quote-right"></i></p></div>
</div>

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

           <div className="package-div">
           <h3 className="comman-head">Choose your destination</h3>
<div className="package-wrap">

{
    CardsData.map((val,index)=>{
        if((val.offer===0)&&(index<11))
        return <PackageCard id={val.id}imgsrc={val.imgsrc} packageDes={val.desc}packageName={val.title}/>
    })
}
</div> 
</div>

<div className="room-box">
<h1 className="comman-head">Where to stay</h1>
<div className="room-wrapper">
{RoomData.map((val)=>{

    return <RoomCard key={val.id}guest={val.guest} rimg={val.imgsrc} bath={val.bath} bed={val.bed} roomName={val.type} prise={val.prise}
    roomDes={val.des}/>
})}

</div>
</div>

        </>
    )
}
