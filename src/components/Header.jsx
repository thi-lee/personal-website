import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Logo() {
    return <div>
        <a className="header-logo" href="https://www.linkedin.com/in/thilehy/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
        <a className="header-logo" href="https://github.com/thi-lee"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
    </div>
}

function Header() {
    return <header>
        <h1>Thi Le</h1>
        <Logo />
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