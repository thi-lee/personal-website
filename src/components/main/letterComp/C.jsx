import React from "react";
import { TextHeading } from "../Display";
import { createLogosContact } from "./logos";

function C() {
    const info = [
        {
            id: 1,
            text: "LinkedIn",
            src: "svg_logos/contact-linkedin.svg",
            alt: "linkedin",
            href: "https://www.linkedin.com/in/thilehoangy/"
        },
        {
            id: 2,
            text: " Github",
            src: "svg_logos/contact-github.svg",
            alt: "github",
            href: "https://github.com/thi-lee"
        }
    ];

    return (
        <div className="display" id={"display"}>
            <TextHeading heading="Contact" />
            <div className="text icons" style={{margin: "20px 100px"}}>
            {info.map(createLogosContact)}
            </div>
        </div>
    )
}

export default C;