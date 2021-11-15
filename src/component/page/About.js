import React from 'react'
import jsPDF from 'jspdf'
import { Link } from 'react-router-dom'
import Ganga2 from '../../img/Ganga2.jpg'
import Glasshouse from '../../img/Glasshouse.jpg'
import Beach7 from '../../img/Beach7.jpg'
import Goa from '../../img/Goa.jpeg'
import Lotus from '../../img/Lotus.jpg'
import Rajsthan from '../../img/Rajsthan.jpg'
import Mysore from '../../img/Mysore.jpeg'
import '../../stylesheet/About.css';
import Gdetail from '../../data/Gdetail'
import Guider from '../components/Guider'
export default function About() {
    const  generatePdf=()=>{
        var doc=new jsPDF('p','px','a4','false');
        doc.addImage(Lotus,'PNG',65,20,500,400)
        doc.text(20,20,'this is a pdf')
        doc.save('a.pdf')
    }
    return (
        <>
            <div className="about">
           
            <h3 className="comman-head">About us</h3>
            <div className="about-gallery"   >           
<img alt="" src={Lotus}  className=" abt-img img-1"/>
<img alt="" src={Beach7} className="abt-img img-3"/>
<img alt="" src={Goa} className="abt-img img-2"/>
<img alt="" src={Mysore} className="abt-img img-4"/>
<img alt="" src={Rajsthan} className=" abt-img img-6"/>
<img alt="" src={Glasshouse} className="abt-img img-7"/>
<img alt="" src={Ganga2} className="abt-img img-8"/>
            </div>
            <div className="about-detail"  data-aos="fade-left"  data-aos-duration="1000">                
                <div>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                    </div>
                    <h1 className="comman-head">UniTraveler</h1>
                    <h4 className="comman-head">Tourism & resort</h4>
                    <p><i className="fas fa-quote-left"></i>&nbsp;&nbsp;UniTraveler is established in Varanasi in 1999, Unitraveler is distinguished today in India as a best service provider for tourism. In 2003 second branch of UniTraveler was established in Nasik. Today There are 8 branch of UniTraveler in different  cities of India. Our branch is in Karnataka, Uttar Pradesh, Maharashtra, Kerala, Punjab, Rajasthan, Delhi, Goa. We provide you many facilities during your vacation with us. We provide you a guider, who will guied you in your whole trip. You also get service of Hotel and Food, beautiful garden. <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Travel is the main thing you purchase that makes you more extravagant." We, at 'UniTraveler', swear by this and put stock in stisfying travel dreams that make you perpetually rich constantly.  We have been moving excellent encounters for a considerable length of time through our cutting edge planned occasion bundles and other fundamental travel administrations. We rouse our clients to carry on with a rich life, brimming with extraordinary travel encounters. &nbsp;&nbsp;
        <i className="fas fa-quote-right"></i>
                    </p>
                    {/* <Link to="/about" onClick={generatePdf}>download Borchure</Link> */}
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
