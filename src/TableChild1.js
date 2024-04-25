import { useState } from "react";

function TableChild1(props) {

    const [childdata, setChilddta] = useState()
    const [newtable, setNewTable] = useState(val)
    


    function handlesubmit(a) {
        console.log(a)
    }

    return (
        

        <tr>
            <td>{props.status.id}</td>
            <td>{props.status.name}</td>
            <td>{props.status.age}</td>
            <td>{props.status.mailid}</td>
            <td>{props.status.phoneno}</td>
            
            <td> </td>


           





        </tr>
         

    )
}
export default TableChild1;