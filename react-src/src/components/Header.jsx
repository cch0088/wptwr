import React from "react";
import logo from '../logo.svg';
import logotext from '../logotext.svg';
import { useNavigate } from "react-router-dom";
import { getRoot } from "../lib/validation";
import { WP_ROOT } from "../config";

function Header() {
    const navigate = useNavigate();

return (
    <div id="branding" onClick={() => { navigate(getRoot(WP_ROOT)) }}>
        <div id="logo"><img src={logo} alt="Logo" /></div>
        <div id="logotext"><img src={logotext} alt="Logo Text" /></div>
    </div>
    )
}
export default Header;
