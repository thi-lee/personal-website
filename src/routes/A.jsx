import React from "react";
import { TextHeading, Text, Mycard } from "../components/letters/DisplayComps";

function A() {
    return (
        <div className="display" id={"display"}>
            <TextHeading heading="About Me" />
            <Text text="My name is Thi Le (pronounced like 'tea 🍵'), 
            and I am an incoming transfer student and a CS sophomore 
            at the University of North Carolina – Chapel Hill. " />
            <p className="text" style={{paddingBottom: "0"}}>Two truths and one lie:</p>
            <div className="truths-lie">
                <Mycard cardContent="I was born on Mars in the 21st century 🌠 " />
                <Mycard cardContent="I can sleep in complete darkness or any airport 🛩" />
                <Mycard cardContent="I got rid of eight teeth in one year 🦷 " />
            </div>
        </div>
        
    )
}

export default A;