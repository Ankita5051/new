import React from 'react'
import '../../stylesheet/component/RoomCard.css'
export default function RoomCard(props) {
    return (
        <>
        <div className="room">
<div className="room-img" style={{backgroundImage:`url(${props.rimg})`}}>

</div>
<h3 className="comman-head">{props.roomName}</h3>
<p><i className="fas fa-user-friends">  &nbsp;{props.guest} guest</i> &nbsp;  &nbsp; <i className="fas fa-bed"></i> &nbsp; {props.bed} Beds  &nbsp;  &nbsp;<i className="fas fa-bath"></i>  &nbsp;{props.bath} bath<br/>
You get a single room in which {props.guest} can stay. you get a work desk, a TV, bathroom, {props.bed} bed, and may be a closet, and a dresser. Suite is much larger accommodation. It usually has attached {props.bath} bathroom, a living area including a dining area as well.
</p>
<h4 className="room-prise"> <i className="fas fa-rupee-sign"></i>&nbsp; {props.prise}/night</h4>
</div>
        </>
    )
}
