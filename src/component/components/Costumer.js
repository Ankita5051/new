import React from 'react'
import '../../stylesheet/component/Costumer.css'
export default function Costumer(props) {
    return (
        <>
        
        <div className="costomer">

<div className="costomer-img"
//  style={{backgroundImage:`url(${props.imgsrc.default})`}}
 >
<div>
<i className="fab fa-twitter"></i>
        <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
              
</div>
</div>
<h5>{props.costomer}</h5>
<p>{props.review}</p>
</div>
        

        </>
    )
}
