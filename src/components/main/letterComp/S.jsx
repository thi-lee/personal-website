import React, { useState } from "react";
import { TextHeading } from "../Display";
import "./S.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faNodeJs, faReact, faGitAlt, faNpm, faBootstrap, faAngular } from '@fortawesome/free-brands-svg-icons';
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
            id: 1,
            fa: faCode,
            name: "HTML5/CSS",
            detail: "self taught"
        },
        {
            id: 2,
            fa: faJs,
            name: "Javascript"
        },
        {
            id: 3,
            fa: faReact,
            name: "React"
        },
        {
            id: 4,
            fa: faAngular,
            name: "Angular"
        },
        {
            id: 5,
            fa: faNodeJs,
            name: "NodeJS"
        },
        {
            id: 6,
            fa: faGitAlt,
            name: "Git"
        },
        {
            id: 7,
            fa: faNpm,
            name: "npm"
        },
        {
            id: 8,
            fa: faBootstrap,
            name: "BootStrap"
        }
    ]

    function createLogo(logo) {
        return <Logo key={logo.id} fa={logo.fa} name={logo.name} />
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