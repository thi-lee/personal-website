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
        <figure>
            <img className={`photo ${props.className}`} src={props.src} alt={props.alt} />
            <figcaption>{props.figcaption}</figcaption>
        </figure>
    )
}

function Mycard(props) {
    const customStyle={
        fontSize: "120%",
        paddingBottom: "5%",
    }
    return (
    <div className="card">
        <div style={customStyle}>{props.cardHeader}</div>
        <div>{props.cardContent}</div>
    </div>)
}

export { TextHeading, Text, Img, Mycard };