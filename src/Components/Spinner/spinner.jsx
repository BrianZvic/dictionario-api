import React from "react";
import {FaCircleNotch} from "react-icons/fa";
import "./spinner.css"

function Spinner() {
    return(
        <span className="spinner-conteiner"><FaCircleNotch></FaCircleNotch></span>
    )
}

export default Spinner;