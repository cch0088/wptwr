import React from "react";
import logo from '../logo.svg';

function Header() {

return (
    <div id="head-nav-bar">
        <div id="logo"><img src={logo} alt="Logo" /></div>
        <div id="logotext">Travel With Reason</div>
    </div>
    )
}
export default Header;
