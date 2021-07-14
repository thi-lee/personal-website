import React from "react";

function DisplayMain(props) {
    return (<div className="display">{props.content}</div>)
}

function TextHeading(props) {
    return (
        <h1 className="text-heading">{props.heading}</h1>
    )
}

function Text(props) {
    return (
        <p className="text">{props.text}</p>
    )
}

function Img(props) {
    return (
        <img src={props.src} alt={props.alt} />
    )
}

export default DisplayMain;
export { TextHeading, Text, Img };