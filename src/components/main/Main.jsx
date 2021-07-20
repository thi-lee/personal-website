import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import LetterKey from "./LetterKey";
import { A } from "./letterComp/A";
import B from "./letterComp/B";
import C from "./letterComp/C";
import S from "./letterComp/S";

import firstRow from "./letters/firstRow";
import secondRow from "./letters/secondRow";
import lastRow from "./letters/lastRow";

function Main() {
    function createLetterKey(item) {
        return <LetterKey 
            key={item.id}
            letter={item.letter}
            container={(item.link !== "/") ? "container" : "container-inactive"}
            to={`${item.link}`}
        />
    }

    return (<div className="main">
        <div className="letters">
            <div className="letter-row">{firstRow.map(createLetterKey)}</div>
            <div className="letter-row">{secondRow.map(createLetterKey)}</div>
            <div className="letter-row">{lastRow.map(createLetterKey)}</div>
        </div>
        <Switch>
            {/* <Route exact path="/home" component={Home} /> */}
            <Redirect exact from="/" to="/home" />
            <Route exact path="/A" component={A} />
            <Route exact path="/B" component={B} />
            <Route exact path="/C" component={C} />
            <Route exact path="/S" component={S} />
        </Switch>
    </div>)
}

export default Main;