import React from "react";

function LetterKey(props) {

    return (<div 
        className={`${props.className}`} 
        onClick={() => {
            props.onClickEvent();
        }} >
        <p className="letter">
            {props.letter}
        </p>
    </div>)
}

export default LetterKey;