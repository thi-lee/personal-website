import React from "react";
import { Link } from "react-router-dom";

function Letter(props) {
    function activeKey() {
        return <Link to={props.to} className="letter">{props.letter}</Link>
    }

    function inactiveKey() {
        return <p className="letter">{props.letter}</p>
    }

    return (
        <div className={`${props.container}`} >
            {props.container === "container" ? activeKey() : inactiveKey()}
        </div>
    )
}

export default Letter;