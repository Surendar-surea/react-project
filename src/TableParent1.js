import { useState } from "react"
import { arrayobject1 } from "./TableData1";
import TableView from "./TableView";
import "./Table.css";
import { getByPlaceholderText } from "@testing-library/react";

function TableParent1() {

    const [inputv, setInputv] = useState()
    const [inputv1, setInputv1] = useState()
    const [inputv2, setInputv2] = useState()
    const [inputv3, setInputv3] = useState()
    const [inputv4, setInputv4] = useState()
    const [tabledata, setTabledata] = useState(arrayobject1);
    const [viewdata, setViewdata] = useState([])

    function handleadd(a) {
        {
            setViewdata(
                [...viewdata, a]
            )
        }

    }

    function handlesubmit() {
        let val;
        if (inputv, inputv1, inputv3, inputv2, inputv4 == null) {
            alert("please enter value");

        } else {
            return (
                setTabledata(
                    [...tabledata, { id: inputv, name: inputv1, age: inputv2, phoneno: inputv3, mailid: inputv4 }]
                )
            )
        }
    }



    function handledelete(b) {
        let filterdarray = tabledata.filter((val) => {
            if (val.id == b) {
                return false;
            }
            else {
                return true;
            }


        });
        setTabledata(filterdarray)
    }


    return (
        <div>
            <table className="table">
                <h1>My todo's</h1>

                {
                    tabledata.map((val) => {

                        return (

                            <tr>
                                <TableView val={val} send={(a) => handleadd(a)} transfer={(b) => handledelete(b)} />
                            </tr>
                        )
                    })


                }

            </table>
            <div className="input-v">
            <input type="number" placeholder="enter your id" onChange={(event) => { setInputv(event.target.value) }}></input>
            <input type="text" placeholder="enter your name" onChange={(event) => { setInputv1(event.target.value) }}></input>
            <input type="number" placeholder="enter your age" onChange={(event) => { setInputv2(event.target.value) }}></input>
            <input type="number" placeholder="enter your phone no" onChange={(event) => { setInputv3(event.target.value) }}></input>
            <input type="email" placeholder="enter your mailid" onChange={(event) => { setInputv4(event.target.value) }}></input>
            <button onClick={() => { handlesubmit() }}>submit</button>
            </div>

            <table className="table-1">


                {
                    viewdata.map((val) => {
                        return (
                           
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.age}</td>
                                <td>{val.mailid}</td>
                                <td>{val.phoneno}</td>
                            </tr>
                         
                        )

                    })
                }
            </table>



        </div>


    )
}




export default TableParent1;