import ImagesDetails from "./ImagesDetails"
import ButtonPannel from "./ButtonPannel"
import { useState } from "react"

function Gallery() {
    
    // const[position,setPosition]=useState({x:0,y:1,z:2});
    // console.log(position);
    
    // const data=[
    //     {
    //         name : 'apple',
    //         price:20
    //     },{
    //         name : 'apple',
    //         price:20
    //     },{
    //   name : 'apple',
    //         price:20
    //     }
    // ]
    // const [value,setValue]=useState(data);
    // const[inputv,setInputv]=useState([])

    
    
    const [status, setStatus] = useState('');
    // function handlesubmit(){
    //     setValue(
    //        [...value,{name : inputv,}]
         
    //     )
    // }
    return (

        <div className="body">
            
            <ButtonPannel send={(a)=>{setStatus(a)}}/>
            <ImagesDetails types={status}/>
            {/* {
                value.map((val)=>{
                    return(
                        <li>{val.name}</li>
                    
                    ) */}
                   

          {/* <button onClick={()=>{
            setPosition(
                {
                ...position ,x:10,y:12,z:24
                }
            )
          }}>click</button>
          <li>{position.x}</li>
           <li>{position.y}</li>
           <li>{position.z}</li>
            */}
           
                    
            
                
{/*             
             <input onChange={(event)=>{setInputv(event.target.value)}}></input>
                    <button onClick={()=>{handlesubmit()}}>ADD</button>   
                   */}
            
        </div>
        
    )

}

export default Gallery;
