import React from "react";
import { FaVolumeUp } from "react-icons/fa";
import "./phrases.css"

function Phrasess(props){


    function StarAudio(){
        const audio = document.getElementById("audio");
        const url = props.results[0].phonetics[0].audio;
        const url_length = url.length
        audio.setAttribute("src", `https://${url.slice(8,url_length)}`);
        audio.play();
        
    }
    
    console.log(props.results[0])


    return(
        <section className="phrases-container">
            <audio id="audio"></audio>
            {props.results[0].word && <div className="word-conteiner">
                <h3>{props.results[0].word}</h3>
                <button  id="sound" onClick={StarAudio} ><FaVolumeUp></FaVolumeUp></button>
            </div>
            }   
             {
                props.results[0].phonetics[1] && 
                    <p className="phonetic">{props.results[0].phonetics[1].text}</p>
            }
            
            <div className="meanings">
                <b><span>{props.results[0].meanings[0].partOfSpeech}</span></b>
                <p>definition: {props.results[0].meanings[0].definitions[0].definition}</p>
            </div >
           { 
                props.results[0].meanings[1] &&
                <div className="meanings">
                    <b><span>{props.results[0].meanings[1].partOfSpeech}</span></b>
                    <p>definition: {props.results[0].meanings[1].definitions[0].definition}</p>   
                </div>
            }
           
           {props.results[0].meanings[2] &&
                <div className="meanings">
                    <b><span>{props.results[0].meanings[2].partOfSpeech}</span></b>
                    <p>definition: {props.results[0].meanings[2].definitions[0].definition}</p>
                </div>
           }

        </section>

    )
}

export default Phrasess;