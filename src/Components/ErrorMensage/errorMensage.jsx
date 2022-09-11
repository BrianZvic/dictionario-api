import React from "react";
import "./errorMensage.css"

function ErrorMensage(props){
    const {title,message,resolution} = props.errors

    return(
        <span className="error-conteiner">
            <p>{title}</p>
            <p>{message}</p>
            <p>{resolution}</p>
        </span>
    )
}

export default ErrorMensage;