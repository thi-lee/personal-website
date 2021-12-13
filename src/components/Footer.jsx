import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return <footer>
        <p>Made in {currentYear} by Thi L.</p>
    </footer>
}

export default Footer;