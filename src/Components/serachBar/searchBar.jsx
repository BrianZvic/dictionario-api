import React from "react";
import { useForm } from "react-hook-form";
import "./searchBar.css"
import { FaSistrix } from "react-icons/fa";

function SearchBar(props){
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
   
   
    return(
        <form className="form-search" onSubmit={handleSubmit(props.onSubmit)}>
            <input  type="text" {...register("phrases")} />
            <button type="submit"><FaSistrix></FaSistrix></button>
        </form>

    )
}

export default SearchBar;