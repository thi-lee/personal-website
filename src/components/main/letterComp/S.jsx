import React from "react";
import { TextHeading, Text } from "../Display";
import { createLogos } from "./logos";
import "./S.css";

function logos() {
    const frontend = [
        {
            id: 1,
            name: "HTML5",
            src: "svg_logos/frontend-html5.svg",
            alt: "html5"
        },
        {
            id: 2,
            name: "Javascript",
            src: "svg_logos/frontend-javascript.svg",
            alt: "js"
        },
        {
            id: 3,
            name: "React",
            src: "svg_logos/frontend-react.svg",
            alt: "react"
        }
    ];

    const backend = [
        {
            id: 1,
            name: "NodeJS",
            src: "svg_logos/backend-nodejs.svg",
            alt: "nodejs"
        },
        {
            id: 2,
            name: "ExpressJS",
            src: "svg_logos/backend-expressjs.svg",
            alt: "expressjs"
        },
        {
            id: 3,
            name: "MongoDB",
            src: "svg_logos/backend-mongo.svg",
            alt: "mongodb"
        }
    ];

    const others = [
        {
            id: 1,
            name: "Git",
            src: "svg_logos/others-git.svg",
            alt: "git"
        },
        {
            id: 2,
            name: "npm",
            src: "svg_logos/others-npm.svg",
            alt: "npm"
        },
        {
            id: 3,
            name: "webpack",
            src: "svg_logos/others-webpack.svg",
            alt: "webpack"
        },
        {
            id: 4,
            name: "Netlify",
            src: "svg_logos/others-netlify.svg",
            alt: "netlify"
        },
        {
            id: 5,
            name: "Heroku",
            src: "svg_logos/others-heroku.svg",
            alt: "heroku"
        }
    ]

    return { frontend, backend, others };
}

function S() {
    return (
        <div className="display" id={"display"}>
            <TextHeading heading="Skills" />
            <div className="category">
                <Text className="category-text" text="Front-end" />
                <div className="icons-row">{logos().frontend.map(createLogos)}</div>
            </div>
            <div className="category">
                <Text className="category-text" text="Back-end" />
                <div className="icons-row">{logos().backend.map(createLogos)}</div>
            </div>
            <div className="category">
                <Text className="category-text" text="Others" />
                <div className="icons-row">{logos().others.map(createLogos)}</div>
            </div>
        </div>
    )
}

export default S;