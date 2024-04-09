import { useState } from "react";

function ImageChild(props){
    const[senddata,setSenddata]=useState("iam from child component");
    
    return(
    
        
       <div className="mob" > 
                <img  className="img-1"src={props.filter.imgurl}></img>
                <h2>{props.filter.name}</h2>
                <p className="rate">{props.filter.rate}</p>
                <p className="ram">{props.filter.ram}</p>
                <p>{props.filter.Battery}</p>
                <p>{props.filter.processor}</p>
                {/* <button onClick={()=>{props.send(senddata)}}>sendData</button> */}
                            </div>
       
    
        
    )
}
export default ImageChild;
