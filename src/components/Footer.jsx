import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return <footer>
        <p>Made with ❤️ in {currentYear} by Thi Le and coded in Visual Studio Code. 
        Built with React and deployed by Netlify.</p>
    </footer>
}

export default Footer;