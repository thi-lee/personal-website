import React, { useState } from "react";
import { TextHeading } from "../Display";
import "./S.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faNodeJs, faReact, faGitAlt, faNpm, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

function Logo(props) {

    const [ mouseEnter, setMouseEnter ] = useState(false);

    function detectMouseEnter() {
        setMouseEnter(true);
    }
    function detectMouseLeave() {
        setMouseEnter(false);
    }

    return (
        <div 
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100px",
            margin: "20px 40px 0px 40px",
            cursor: "pointer"
        }}
        onMouseEnter={detectMouseEnter}
        onMouseLeave={detectMouseLeave}
        >
            <FontAwesomeIcon icon={props.fa} size="6x" />
            <p style={{marginTop: "10px", visibility: mouseEnter ? "visible" : "hidden"}}>{props.name}</p>
        </div>
    )
}

function S() {

    const logos = [
        {
            fa: faCode,
            name: "HTML5/CSS",
            detail: "self taught"
        },
        {
            fa: faJs,
            name: "Javascript"
        },
        {
            fa: faNodeJs,
            name: "NodeJS"
        },
        {
            fa: faReact,
            name: "React"
        },
        {
            fa: faGitAlt,
            name: "Git"
        },
        {
            fa: faNpm,
            name: "npm"
        },
        {
            fa: faBootstrap,
            name: "BootStrap"
        }
    ]

    function createLogo(logo) {
        return <Logo fa={logo.fa} name={logo.name} />
    }

    return (
    <div className="display" id={"display"}>
        <TextHeading heading="Skills" />
        <div style={{
            display: "flex", 
            flexDirection: "row", 
            flexWrap: "wrap", 
            justifyContent: "center", 
            height: "80%",
            color: "#283618"
        }}>
        {logos.map(createLogo)}
        </div>
    </div>)
}

export default S;