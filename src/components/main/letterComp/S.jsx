import React from "react";
import { TextHeading, Text } from "../Display";
import "./S.css";

function LogoComp(props) {
    return (
        <div className="icon">
            <img src={props.src} alt={props.alt} />
        </div>
    )
}

function createLogos(logo) {
    return (
        <LogoComp src={logo.src} alt={logo.alt} />
    )
}

function logos() {
    const frontend = [
        {
            name: "",
            src: "svg_logos/frontend-html5.svg",
            alt: "html"
        },
        {
            name: "",
            src: "svg_logos/frontend-javascript.svg",
            alt: "js"
        },
        {
            name: "",
            src: "svg_logos/frontend-react.svg",
            alt: "react"
        }
    ];

    const backend = [
        {
            name: "",
            src: "svg_logos/backend-nodejs.svg",
            alt: "nodejs"
        },
        {
            name: "",
            src: "svg_logos/backend-expressjs.svg",
            alt: "expressjs"
        },
        {
            name: "",
            src: "svg_logos/backend-mongo.svg",
            alt: "mongodb"
        }
    ];

    const others = [
        {
            name: "",
            src: "svg_logos/others-git.svg",
            alt: "git"
        },
        {
            name: "",
            src: "svg_logos/others-npm.svg",
            alt: "npm"
        },
        {
            name: "",
            src: "svg_logos/others-webpack.svg",
            alt: "webpack"
        },
        {
            name: "",
            src: "svg_logos/others-netlify.svg",
            alt: "netlify"
        },
        {
            name: "",
            src: "svg_logos/others-heroku.svg",
            alt: "heroku"
        }
    ]

    return { frontend, backend, others };
}

function S() {
    return (
        <div className="display">
            <TextHeading heading="Skills" />
            <div className="category">
                <Text text="Front-end" />
                <div className="icons-row">
                    {logos().frontend.map(createLogos)}
                </div>
            </div>
            <div className="category">
                <Text text="Back-end" />
                <div className="icons-row">
                    {logos().backend.map(createLogos)}
                </div>
            </div>
            <div className="category">
                <Text text="Others" />
                <div className="icons-row">
                    {logos().others.map(createLogos)}
                </div>
            </div>
        </div>
    )
}

export default S;