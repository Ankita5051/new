import React from 'react'

import PlaceData from '../../data/PlaceData'
import PlaceCard from './PlaceCard';
export default function PlaceDetail(props) {
    const pid=parseInt(props.match.params.pid);

    return (
        <>
        {PlaceData.map((val)=>{
            if(val.id===pid)
            return <PlaceCard key={val.id}
             qutes={val.qutes}
             imgsrc={val.imgsrc}
             img1={val.img1}
             img2={val.img2}
             img3={val.img3}
             img4={val.img4}
             img5={val.img5}
             img6={val.img6}
             img7={val.img7}
             img8={val.img8}
                 title={val.title}
                 des={val.des}
                 prise={val.prise}
                 day={val.day}
               type={val.tripType}
               glryDes={val.galryPara}
               oldprise={val.oldprise}
             />
            
        })}
        </>

           )
}
