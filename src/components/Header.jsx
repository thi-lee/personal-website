import React from "react";
import ScrollIntoView from "react-scroll-into-view";

function Header() {
    return <header>
        <h1>Thi Le</h1>
        <p></p>
        <div className="navigation" id={"header"}>
            <p>This personal website is inspired by the keyboard most of us use daily.</p>
            <p>Every green letter below associates with a word or phrase,</p>
            <p>and when clicked, the corresponding information will be on display.
            </p>
            <ScrollIntoView selector="#keyboard">
                <p className="dive-in">→ Let's dive in! ←</p>
            </ScrollIntoView>
        </div>
    </header>
}

export default Header;