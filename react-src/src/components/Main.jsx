import React from "react";
import MainMenu from "./MainMenu"
import { B_MAIN_MENU } from "../config";

function Main() {

return (
    <>
        <div id="heading-container"><h2>Find your next destination...</h2></div>
        <MainMenu route={B_MAIN_MENU} />
    </>
    )
}
export default Main;
