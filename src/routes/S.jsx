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
            margin: "20px 40px 0px 40px",
            cursor: "pointer"
        }}
        >
            <FontAwesomeIcon icon={props.fa} size="6x" />
            <p>{props.name}</p>
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