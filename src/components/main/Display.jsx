import React from "react";

function DisplayMain(props) {
    return (<div className="display">{props.content}</div>)
}

function Display(props) {
    return (<div className="display">
        <h1 style={{position: "sticky", top: 0, backgroundColor: "white"}}>{props.heading}<hr></hr></h1>
        <p>{props.para}</p>
    </div>)
}

export default DisplayMain;
export { Display }