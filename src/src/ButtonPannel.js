import { useState } from "react";
import { arrobject, texta, textb, textc, textd } from "./GalleryData";
import'./ImagesDetails.css';

function ButtonPannel(props){
    function handlechange(btnV){
        // console.log(btnV);
        props.send(btnV);
        
    }
  
    return(
        
        <div className="btn">
               

            <button onClick={()=>{handlechange('all')}}>All Electronic</button>
            <button onClick={()=>{handlechange('mb')}}>Mobile</button>
            <button onClick={()=>{handlechange('lp')}}>Laptops</button>
            <button onClick={()=>{handlechange('ipd')}}>Ipads</button>
        </div>
    )
}
export default ButtonPannel;