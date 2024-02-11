import React from "react";
import Header from "./Header";
import UserControl from "./UserControl";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
return (
        <>
            <Header />
            <UserControl />
            <div id="content-wrap">
                <Outlet />
            </div>
            <Footer />
        </>
    )
};

export default Layout;
