import { useState } from "react"

function ToDoList(){
    
const arr=[
    {
        name:'apple',
        price : 20
    },
    {
        name:'orange',
        price : 20
    }, {
        name:'guava',
        price : 20
    },
]
const[dataa,setDataa]=useState(arr);
const[inputv,setInputv]=useState([]);
function Handleclick(){
    setDataa(
        [...dataa,{name:inputv}]
    )
}
function handleDelete(a){
let filterdArray= dataa.filter((val)=>{
    if(val.name==a){
        return false;
    }
    else{
        return true;
    }


});
setDataa(filterdArray);
}
function HandleChange(a){
   let changedarray= dataa.map((val)=>{
    if(val.name==a){
        return{...val,name:'grapes'}
    }else{
        return val;
    }


    });
    setDataa(changedarray);
}

return(
<div>
    {
        dataa.map((val)=>{
            return <li>{val.name}
            {val.price}<button onClick={()=>{handleDelete(val.name)}}>Delete</button>
            <button onClick={()=>HandleChange(val.name)}>change</button></li>
        
        })
    }
       <button onClick={()=>{Handleclick()}}>submit</button>
       <input onChange={(event)=>{setInputv(event.target.value)}}></input>
</div>
)
}
export  default ToDoList;