import React from 'react'
import emailjs from 'emailjs-com';
import '../../stylesheet/Contact.css'
export default function Contact() {

    function sendEmail(e){
        try {
            emailjs.sendForm('service_2yu8s0j','template_8pow4ka',e.target,'user_jxXS6kDMZ9yiE1q2H6rP4');
            alert("Message sent successfully")
        } catch (error) {
          console.log(error)  
        }
           
    }


    return (
        <><div  className="contact">
              <div className="contact-1">
              <div className="contact-img" >

           </div>
            <div className="contact-detail"><h1> UniTraveler</h1>
            <h3>City</h3>
            <p>N.H. 56, Airport Road, Shivpur varanasi 22103
           </p>
           <h3>Contact detail</h3>
            <p className="c-d">
         
            Email:contact@example.com
            <br/>
            phone:+88(0)101 0000 000</p>
            <h3>Connect with us</h3>
            <p className="contact-link">
            <i className="fab fa-google-plus-g"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest-p"></i>
                                    
            </p>
            </div>
            </div>
            <div className="c-reach">
            <div className="contact-form"   data-aos="fade-right" data-aos-duration="1500">
            <h3 className="comman-head">Contact us with message</h3>
            <form  onSubmit={sendEmail}>
<input type="text" name="name" placeholder="Enter your name..." required="true"/>
<input type="email" name="email" placeholder="Enter your email..." required="true"/>

<textarea type="text" name="message" placeholder="Write your message here...." required="true"></textarea>
<input type="submit"className="contact-btn" value="Send"/>
</form> 
            </div>
            <div className="map"  data-aos="fade-left" data-aos-duration="1500">        <h3 className="comman-head">Reach to us</h3>
            <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.085023629382!2d82.98906951433908!3d25.26772513503759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e322990b81d57%3A0x187c3decd33a8727!2sBanaras%20Hindu%20University!5e0!3m2!1sen!2sin!4v1630676872664!5m2!1sen!2sin" width="600"  allowFullScreen="" loading="lazy"></iframe>
            </div>
</div>


            </div>

        </>
      
    )
}
