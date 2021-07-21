import React from "react";
import { TextHeading, Text } from "../Display";

function B() {
    return (
        <div className="display" id={"display"}>
            <TextHeading heading="Burrito" />
            <Text text="When I first came to America, I didn't like burrito.
            Eating them results in a big mess that I didn't want to deal with." />
            <Text text="However, in my third year, everyone can make me happy
            by giving me a burrito. I love the ones with beef and rice. " />
        </div>
    )
}

export default B;