import React from "react";
import { TextHeading, Text } from "../components/letters/DisplayComps";

function W() {
    return (
        <div className="display" id={"display"}>
            <TextHeading heading="Why?" />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fC9da6eqaqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/FEeTLopLkEo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Text text="" />
        </div>
    )
}

export default W;