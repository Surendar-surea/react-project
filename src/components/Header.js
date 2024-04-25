import { useState } from "react"
import { imgobj1 } from "../Datas/ImageData"

function Header(){
    return(
        <div className="header">
            <div className="logo">
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"></img>

            </div>
            <div className="input">
                <input></input>

            </div>
            <div className="list">
                <ul type="none">
                    <li>login</li>
                    <li>cart</li>
                    <li>Become a seller</li>
                </ul>

            </div>
        </div>
    )
   
    
}
export default Header;