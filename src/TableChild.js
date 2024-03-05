import { arrayobject } from "./TableData"
import {useState} from "react"

function TableChild(props) {
   
        // function handlechange(){
        //         setArrtable(
        //             [...arrtable,{id:input}]
                   
        //             // [...arrtable,{name:input}]
                    
        //         )
        // }
        // function handleDelete(a){
        //    let filterdArray= arrtable.filter((val)=>{
        //     if(val.id==a){
        //         return false;
        //         }
        //     else{
        //         return true;
        //     }
    
        //     });
        //     setArrtable(filterdArray);  
        // }
        
       
    
       
//     const[arrtable,setArrtable]=useState(arrayobject);
//     const[input,setInput]=useState([]);
//     function TableParent(props){
//         function handlechange(){
//                 setArrtable(
//                     [...arrtable,{id:input }]
//                     // [...arrtable,{name:input}]
                    
//                 )
//         }
//         function handleDelete(a){
//            let filterdArray= arrtable.filter((val)=>{
//             if(val.id==a){
//                 return false;
//                 }
//             else{
//                 return true;
//             }
    
//             });
//             setArrtable(filterdArray);
//         }

    
    return (

         <tr>
              <td>{props.data.id } </td>
            <td>{props.data.name}</td>
            <td>{props.data.age}</td>
            <td>{props.data.mailid}</td>
            <td>{props.data.phoneno}</td>    
        </tr>
            




    )

}


export default TableChild;