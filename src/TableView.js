<<<<<<< HEAD
import { useState } from "react";

function TableView(props) {
     return (
        <>
=======
function TableView(props) {
    return (
        <div>
>>>>>>> d2b452a387a8ad90e495ee9fd55c361a799cb380
            <td>{props.val.id}</td>
            <td>{props.val.name}</td>
            <td>{props.val.age}</td>
            <td>{props.val.mailid}</td>
            <td>{props.val.phoneno}</td>
<<<<<<< HEAD
            <td><button onClick={()=> props.send(props.val)}>Add</button></td>
            <td><button onClick={()=>props.transfer(props.val.id)}>Delete</button></td>


            
        </>
=======
        </div>
>>>>>>> d2b452a387a8ad90e495ee9fd55c361a799cb380
    )
}

export default TableView;