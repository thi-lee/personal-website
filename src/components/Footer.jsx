import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
    return <footer>
        <p>Copyright © Thi Le {currentYear}</p>
    </footer>
}

export default Footer;