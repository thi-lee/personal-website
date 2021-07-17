import React from "react";
import { Link } from "react-router-dom";

function LetterKey(props) {

    return (<div className={`${props.container}`} >
        <Link 
        to={props.to} 
        className="letter">
            {props.letter}
        </Link>
    </div>)
}

export default LetterKey;