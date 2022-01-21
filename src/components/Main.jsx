import React from "react";
import { Route, Switch } from "react-router-dom";

import A from "../routes/A";
import S from "../routes/S";
import P from "../routes/P";

function Main() {
    return (<div className="main">
        <Switch>
            <Route exact path="/" component={A} />
            <Route exact path="/A" component={A} />
            <Route exact path="/S" component={S} />
            <Route exact path="/P" component={P} />
        </Switch>
        
    </div>
    )
}

export default Main;