import React from "react";

function Header() {
    return <header>
        <h1>Thi Le</h1>
        <p></p>
        <div className="navigation">
            <p>This website is inspired by the keyboard most of us use daily.
                Every green letter below associates with a word or phrase, and when clicked,
                the corresponding information will be on display.
            </p>
            <p>
                Let's <a className="dive-in" href="/#/A">dive in</a> :)
            </p>
        </div>
    </header>
}

export default Header;