import { useState } from "react";

function TableView(props) {
    // const[tablev,setTablev]=useState();

    
    
    return (
        <>
            <td>{props.val.id}</td>
            <td>{props.val.name}</td>
            <td>{props.val.age}</td>
            <td>{props.val.mailid}</td>
            <td>{props.val.phoneno}</td>
            <td><button onClick={()=> props.send(props.val)}>Add</button></td>
            <td><button onClick={()=>props.transfer(props.val.id)}>Delete</button></td>


            
        </>
    )
}

export default TableView;