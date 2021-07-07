import React from "react";

function Display(props) {
    return (<div className="display">
        <h1>{props.heading}</h1>
        <p>{props.para}</p>
    </div>)
}

export default Display;