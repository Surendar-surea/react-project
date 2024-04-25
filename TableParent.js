
import TableChild from "./TableChild";
import { arrayobject } from "./TableData";
import './Table.css';
// import { td1 } from "./TableData";
import { useState} from"react";

function TableParent(props){
    const[arrtable,setArrtable]=useState(arrayobject);
const[input,setInput]=useState('');
const[input1,setInput1]=useState('');
const[input2,setInput2]=useState('');
const[input3,setInput3]=useState('');
const[input4,setInput4]=useState('');
    function handlechange(){
            setArrtable(
                [...arrtable,{id:input, name:input1,age:input2,mailid:input3,phoneno:input4} ],
                
            )
    }
    function handleDelete(a){
       let filterdArray= arrtable.filter((val)=>{
        if(val.id==a){
            return false;
            }
        else{
            return true;
        }

        });
        setArrtable(filterdArray);
    }
   




    return (


        <div>

            <table className="table">
            
                {/* {

                    td1.map(function (val) {
                        return (<th>{val}</th>
                        
                        )
                    })
                } */}
                 {
                    arrtable.map(function (val) {
                        return (
                            
                            <TableChild data={val} />
                        )


                    }
 


                    )


                }
                 
                
                           
                    
                          




            </table>
                            <button onClick={()=>{handlechange()}}>Add</button>
                            < input onChange={(event)=>{setInput(event.target.value)} }  placeholder="enter id"></input>
                            < input onChange={(event)=>{setInput1(event.target.value)} }  placeholder="enter name"></input>
                            < input onChange={(event)=>{setInput2(event.target.value)} }  placeholder="enter age"></input>
                            < input onChange={(event)=>{setInput3(event.target.value)} }  placeholder="enter mail"></input>
                            < input onChange={(event)=>{setInput4(event.target.value)} }  placeholder="enter phoneno"></input>
                           <button onClick={()=>{handleDelete(input)}}>Delete</button>
                           

        </div>
    )
}




export default TableParent;
