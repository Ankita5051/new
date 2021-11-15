import React from 'react'
import { Link } from 'react-router-dom'
import '../../stylesheet/component/PlaceDetail.css'

export default function PlaceCard(props) {



    return (
        <>
        <div className="place-detail-banner" style={{backgroundImage:`url(${props.imgsrc})`}}>        
            </div>
            <div className="qutes">
            
        <div data-aos="zoom-in" data-aos-duration="500" >
            <p><i className="fas fa-quote-left"></i>{props.qutes} <i className="fas fa-quote-right"></i></p></div></div>
<div className="place-detail">
<div className="detail-1">
    <h1>{props.title} trip</h1>
    <p>{props.des}This trip offers a fascinating combination of the region’s archaeological and cultural treasures. Retrace the steps of the Inca on a four-day trek along the Inca Trail to Machu Picchu.
One of the world’s best-known hikes.
</p><br/>
<p className="trip-det">
    trave style:&nbsp;&nbsp; active<br/>
    service level:&nbsp; &nbsp;Standard<br/>
    trip type:&nbsp; &nbsp;{props.type}
</p>
<Link to="/" className="final-book" >
Book Your trip</Link>

</div>
<div className="detail-2"  style={{backgroundImage:`url(${props.img8})`}}>
<div className="prise">
<h3><del>{props.oldprise}</del></h3>
    <h3><i className="fas fa-rupee-sign"></i>{props.prise}</h3>
    <p>{props.day}days</p>
</div>
</div>
            </div>
            <div className="place-gallery">
            <h2>gallery</h2>
                <p> {props.glryDes} are some places in {props.title} that every single traveller should experience at least once in their lives.</p>
<div className="place-imgs">

<img alt="" id="img-1"src={props.img1} onClick={showImg} className=" plc-img img-1 bigImg"/>
<img alt="" id="img-2" onClick={showImg} src={props.img2} className="plc-img img-2"/>
<img alt="" id="img-3" onClick={showImg} src={props.img3} className="plc-img img-3"/>
<img alt="" id="img-4" onClick={showImg} src={props.img4} className="plc-img img-4"/>
<img alt="" id="img-6" onClick={showImg} src={props.img5} className="plc-img img-6"/>
<img alt="" id="img-7" onClick={showImg} src={props.img6} className="plc-img img-7"/>
<img alt="" src={props.img7} id="img-8" onClick={showImg} className="plc-img img-8"/>
</div>
            </div>
        </>

    )

}
var i=0;
function showImg(e){
  // console.log(e.target)
    var newId=e.target;

       // var oldClass=newId.classList[1];
    
   var oldClass=newId.id;
      // console.log(newId.id)
    i=i+1;
 
if(i===1)
{
    newId.classList.remove(oldClass);
    newId.classList.add("bigImg");
}
if(i===2)
{    i=i-2;
    newId.classList.remove("bigImg");
    newId.classList.add(oldClass);
}

}