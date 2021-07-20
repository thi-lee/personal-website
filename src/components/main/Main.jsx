import React from "react";
import { Route, Redirect } from "react-router-dom";

import LetterKey from "./LetterKey";
import { Home, A, B, C } from "./letterComp/A";
import S from "./letterComp/S"

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
        <Route path="/home" component={Home} />
        <Redirect exact from="/" to="/home" />
        <Route path="/A" component={A} />
        <Route path="/B" component={B} />
        <Route path="/C" component={C} />
        <Route path="/S" component={S} />
    </div>)
}

export default Main;