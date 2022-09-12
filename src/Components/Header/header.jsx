import React from "react";
import "./header.css"

import { BsBookFill} from "react-icons/bs";

function Header(){

    /*function blackMode(){
        const button = document.getElementById("black")
        console.log(button)
        button.className.toggle("active");
    }

    */

    return(
        <header className="header">
            <span><BsBookFill></BsBookFill> </span>
            <h1>Dictionario</h1>
            <button className="black-mode">
                <span id="black" ></span>
            </button>
        </header>
    )
}

export default Header;