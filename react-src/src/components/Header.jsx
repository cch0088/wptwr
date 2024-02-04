import React from "react";
import logo from '../logo.svg';
import logotext from '../logotext.svg';

function Header() {

return (
    <div id="head-nav-bar">
        <div id="logo"><img src={logo} alt="Logo" /></div>
        <div id="logotext"><img src={logotext} alt="Logo Text" /></div>
    </div>
    )
}
export default Header;
