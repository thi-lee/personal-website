import React from "react";

function LogoComp(props) {
    return (
        <div className="skills-icon">
            <img src={props.src} alt={props.alt} />
        </div>
    )
}

function createLogos(logo) {
    return (
        <LogoComp key={logo.id} src={logo.src} alt={logo.alt} />
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