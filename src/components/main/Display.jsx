import React from "react";

function TextHeading(props) {
    return (
        <h1 className="text-heading">{props.heading}</h1>
    )
}

function Text(props) {
    return (
        <p className={`text ${props.className}`}>{props.text}</p>
    )
}

function Img(props) {
    return (
        <img className={props.className} src={props.src} alt={props.alt} />
    )
}

export { TextHeading, Text, Img };