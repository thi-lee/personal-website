import React from "react";
import { Route, Switch } from "react-router-dom";
import { TextHeading, Text } from "./Display";

import A from "./letterComp/A";
import B from "./letterComp/B";
import S from "./letterComp/S";

function Main() {
    function Home() {
        return <div className="display" id={"display"}>
            <TextHeading heading="Welcome!" />
            <Text text="This personal website is inspired by the keyboard most of us use daily." />
            <Text text="Every green letter below associates with a word or phrase," />
            <Text text="and when clicked, the corresponding information will be on display." />
        </div>
    }
    
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/A" component={A} />
            <Route exact path="/B" component={B} />
            <Route exact path="/S" component={S} />
        </Switch>
    )
}

export default Main;