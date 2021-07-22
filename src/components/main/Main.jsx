import React from "react";
import { Route, Switch } from "react-router-dom";

import A from "./letterComp/A";
import B from "./letterComp/B";
import S from "./letterComp/S";


function Main() {

    return (
        <Switch>
            <Route exact path="/A" component={A} />
            <Route exact path="/B" component={B} />
            <Route exact path="/S" component={S} />
        </Switch>
    )
}

export default Main;