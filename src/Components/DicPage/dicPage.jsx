import React, { useState } from "react";
import Phrasess from "../Phrases/phrases"
import SearchBar from "../serachBar/searchBar";
import "./dicPage.css"
import axios from "axios";
import Spinner from "../Spinner/spinner";
import ErrorMensage from "../ErrorMensage/errorMensage";


function DicPage(){
    const [loader, setLoader] = useState(false);
    const [results, setResults] = useState([]);
    const [errors, setErros] = useState(null)
    


    async function searchApi(props){
        setLoader(true);
        setResults([])
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${props.phrases}`).then((response)=>{
            setLoader(false)
            setResults(response.data)
            setErros(null)
            
        }).catch((data)=>{
            setLoader(false);
            setErros(data.response)
            setResults([])
           
          
        })
        
        
        
    }
    
    return(
        <div className="container">
            <div className="container-dic">
                <SearchBar onSubmit={searchApi}></SearchBar>
               {loader &&  <Spinner></Spinner>}
               {results.length > 0 && <Phrasess results={results}></Phrasess>}
               {errors && <ErrorMensage errors={errors.data}></ErrorMensage>}

            </div>
        </div>

    )
}

export default DicPage;