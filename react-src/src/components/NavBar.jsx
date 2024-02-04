import React from "react";
import * as routes from "../config";

import { NavLink } from "react-router-dom";

function NavBar() {

return(
    <div id="nav-container">
        <div className="navigation">
            <NavLink to={routes.F_NEWS}>News</NavLink>
            <NavLink to={routes.F_GUIDES}>Guides</NavLink>
            <NavLink to={routes.F_STORE}>Store</NavLink>
            <NavLink to={routes.F_COMMUNITY}>Community</NavLink>
            <NavLink to={routes.F_ABOUT}>About Us</NavLink>
            <NavLink to={routes.F_CONTACT}>Contact Us</NavLink>
            <NavLink to={routes.F_VENDORS}>Our Vendors</NavLink>
            <NavLink to={routes.F_TERMS}>Terms of Use</NavLink>
            <NavLink to={routes.F_PRIVACY}>Privacy Policy</NavLink>
        </div>
     </div>
    )
}

export default NavBar;
