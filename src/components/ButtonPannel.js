import "./Button-pannel.css"
function ButtonPannel(props) {
    function handlechange(btnv) {
        props.send(btnv);

    }
    return (
        <div className="header-1">
            <div className="btn">
                <div className="drop-down">
                    <ul type="none">
                        <li><a onClick={() => { handlechange("all") }}>All electronics</a></li>
                        <div className="dop-down-content">

                            <li><a onClick={() => { handlechange("mb") }}>mobiles</a></li>
                            <li><a onClick={() => { handlechange("ipd") }}>Ipads</a></li>
                            <li><a onClick={() => { handlechange("lp") }}>Laptops</a>
                            </li>


                        </div>
                    </ul>


                </div>
            </div>
        </div>
    )
}
export default ButtonPannel;