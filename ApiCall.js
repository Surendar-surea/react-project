import axios from "axios";
import { useState } from "react";


function ApiCall() {
    const [data, setData] = useState([]);
    function sendApi() {
        axios.get('https://reqres.in/api/users?page=2').then((response) => {
            setData(response.data.data)
            console.log(data);
            // sendApi=setData;


        }
        )
    }
    return (
        <div >
            <button className="btn" onClick={() => { sendApi() }}>send</button>



            <div className="card-d">
                {
                    data.map((val) => {
                        return (
                            <div className="card">


                                <img src={val.avatar}></img>
                                <h1>{val.id}</h1>
                                <h3>{val.first_name}</h3>
                                <h3>{val.last_name}</h3>
                                <p>{val.email}</p>
                                {/* <imgurl>{val.avatar}</imgurl> */}

                            </div>

                        )
                    })

                }
            </div>
        </div>

    )
}
export default ApiCall;