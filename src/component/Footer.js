import React from 'react'
import '../stylesheet/Footer.css'
export default function Footer() {
    return (
        <>

        <div className="footer">
        <div className="f-content">
        <div className="footer-form">
            <h4>Dont'miss our exclusive offers</h4>
            <input type="email" placeholder="Enter your email here"/><button>Signup</button>
            </div>  
        <div>
            <h4>Book now</h4>
            <ul>
                <li>24/7 support: +1800-222-3333</li>
                <li>tourism@brand.com</li>
                <li>
                    <div>
                   
                    <i className="fab fa-google-plus-g"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest-p"></i>
                  
                    </div>
                </li>
            </ul>
        </div>   
        
        <div >
            <h4>Customer Support</h4>
            <ul className="faq">
                <li>Faq</li>
                <li>How do I make a reservation?</li>
                <li>Payment option</li>
                <li>Booking tips</li>
            </ul>
        </div>   
        <div>
        
            <h4>Facilities</h4>
            <ul>
                <li>Hotel</li>
                <li>Car</li>
                <li>food</li>
                <li>Park</li>
            </ul>
        </div>   
        
        </div><hr/>
        <div className="footer-link">
          <p>copyright 2021 Brand name | All right reserved </p><div>
          <i className="fab fa-google-plus-g"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest-p"></i>
                  
                    </div>
                    
        </div>
        </div>
        </>
    )
}
