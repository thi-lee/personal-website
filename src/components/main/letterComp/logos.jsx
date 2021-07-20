import React, { useState } from "react";

function LogoComp(props) {
    const [isMousedOver, setMouseState] = useState(false)
    function mouseOver() {
        setMouseState(true);
    }
    function mouseLeave() {
        setMouseState(false);
    }
    return (
        <div className="skills-icon">
            <img 
            src={props.src} 
            alt={props.alt} 
            onMouseEnter={mouseOver} 
            onMouseLeave={mouseLeave} />
            <p style={{visibility: isMousedOver ? "visible" : "hidden"}} >{props.name}</p>
        </div>
    )
}

function createLogos(logo) {
    return (
        <LogoComp key={logo.id} name={logo.name} src={logo.src} alt={logo.alt} />
    )
}

function createLogosContact(logo) {
    return (
        <div key={logo.id} style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "baseline",
            alignItems: "center"
        }}>
            <LogoComp src={logo.src} alt={logo.alt} />
            <a href={logo.href} target="_blank" rel="noreferrer"
            style={{
                textDecoration: "none",
                height: "50px",
                width: "50px",
                color: "black"
            }}>{logo.text}</a>
        </div>
    )
}

export { createLogos, createLogosContact }