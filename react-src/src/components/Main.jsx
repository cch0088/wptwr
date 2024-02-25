import React from "react";
import MainMenu from "./MainMenu"
import { API_PAGES } from "../config";

function Main() {
    const menuRoute = API_PAGES + "main-menu";

    return (
        <div>
            <div id="heading-container"><h2>Find your next destination...</h2></div>
            <MainMenu route={menuRoute} />
        </div>
        )
}
export default Main;
