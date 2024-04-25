
import { arrobject, arrobject1, arrobject2 } from "./GalleryData";
import './ImagesDetails.css';
import ButtonPannel from "./ButtonPannel";
import { useState } from "react";
import ImageChild from "./ImageChild";


function ImagesDetails(props){
    const[cardarrobject,setCardarrobject]=useState(arrobject);
    
    // const[position,setPosition]=usestate(texte);

    // const[display,setdisplay]=useState("")
    
    return(
        <div className="mob-1">
                
           <imgurl src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"></imgurl>
    {
            cardarrobject.map(function(val1){

                if(val1.category.includes(props.types)){
                    return(
                        <div>
                            <ImageChild filter={val1}/>
                            {/* send={(a)=>{setdisplay(a)}} /> */}
                         
                            </div>
                        )
                }else{
                    return null;
                }
                
             }
             
             
             )}
             {/* <h2>{display}</h2> */}
        
        </div>
    )
            }
            

    


export default ImagesDetails;