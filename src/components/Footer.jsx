import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return <footer>
        <p>Copyright © Thi Le {currentYear}</p>
    </footer>
}

export default Footer;