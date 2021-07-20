import React from "react";
import { TextHeading, Text } from "../Display";

function A() {
    return (
        <div className="display">
            <TextHeading heading="About Me" />
            <Text text="My name is Thi Le (pronounced like 'tea 🍵'), 
            and I am an incoming transfer student and a CS sophomore 
            at the University of North Carolina – Chapel Hill. " />
        </div>
    )
}

export { A };