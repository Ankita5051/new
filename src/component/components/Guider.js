import React from 'react'
import '../../stylesheet/component/Guider.css'
export default function Guider(props) {
    return (
        <>
        <div className="guider">

<div className="guider-img">
<div>
<i className="fab fa-twitter"></i>
        <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
              
</div>
</div>
<p >{props.guidefor}</p>
<h5>{props.guider}</h5>
<p>Working since {props.experience} year as a guider</p>
</div>
        
        </>
        
    )
}
