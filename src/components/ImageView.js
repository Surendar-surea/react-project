import { useState } from "react"
import { imgobj } from "../Datas/ImageData"
import ImageChild from "./ImageChild"


function ImageView(props){
    const[imgdata,setImgdata]=useState(imgobj)
    return(
        <div className="img-parent"> 
            {
                
                imgdata.map((val)=>{
                    if(val.category.includes(props.status))
                    return(
                        <div className="img">
                            <ImageChild filter={val}/>
                            </div>

                    )
                })
            }
        </div>
    )
}
export default ImageView;