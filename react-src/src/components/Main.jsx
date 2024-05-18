import React from "react";
import MainMenu from "./MainMenu"
import { API_PAGES } from "../config";

export default function Main() {
    const menuRoute = API_PAGES + "main-menu";
    return (
        <div>
            <div id="heading-container"><h2>Website is under construction</h2></div>
            <div id="heading-container"><h2><a href='forum'>Community Forum</a></h2></div>
            <div id="heading-container"><h2>Categories</h2></div>
            <MainMenu route={menuRoute} />
        </div>
        )
}
