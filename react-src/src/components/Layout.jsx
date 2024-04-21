import React from "react";
import Header from "./Header";
import UserControl from "./UserControl";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => (<>
    <div id="head-wrap">
        <div id="head-container">
            <Header />
            <UserControl />
        </div>
    </div>
    <div id="content-wrap">
        <Outlet />
    </div>
    <div id="footer-wrap">
        <Footer />
    </div>
</>);

export default Layout;
