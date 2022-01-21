import React from "react";
import { TextHeading } from "../components/letters/DisplayComps";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logos from "./logos-S";

function Logo(props) {
    return (
        <div 
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100px",
            margin: "20px 40px 0px 40px"
        }}
        >
            <FontAwesomeIcon icon={props.fa} size="6x" />
            <p style={{color: "#393D3F"}}>{props.name}</p>
        </div>
    )
}

function S() {

    function createLogo(logo) {
        return <Logo key={logo.id} fa={logo.fa} name={logo.name} />
    }

    return (
    <div className="display" id={"display"}>
        <TextHeading heading="Skills" />
        <div className="s-logos">
        {logos.map(createLogo)}
        </div>
        <div className="text-heading">
            Hello world
        </div>
    </div>)
}

export default S;