import React from "react";
import { TextHeading } from "../components/letters/DisplayComps";
import CardSample from "../components/projects/CardSample";
import '../components/projects/project_styles.css';

function P() {
    return (
        <div className="display" id={"display"}> 
            <TextHeading heading="Projects" />
            <div className="project-cards">
                <CardSample title='Hello World' content='hmm'/>
                <CardSample title='Hello World' content='hmm'/>
                <CardSample title='Hello World' content='hmm'/>
                <CardSample title='Hello World' content='hmm'/>
                <CardSample title='Hello World' content='hmm'/>
            </div>
        </div>
    )
}

export default P;