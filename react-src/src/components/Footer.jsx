import React from "react";
import logo from '../logo.svg';
import logotext from '../logotext.svg';

function Footer() {

return (
    <div id="footer">
        <div className="footer-row">
            <div id="logo-footer"><img src={logo} alt="Logo" /></div>
            <div id="logotext-footer"><img src={logotext} alt="Logo Text" /></div>
            <div className="footer-about"><span className="footer-span">A privacy focused travel community site.</span></div>
            <div id="footer-button">Contact</div>
        </div>
    </div>
    )
}
export default Footer;
