import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContent } from "../features/PageServices";
import { pushContent } from "../features/ContentSlice";

function MainMenu({route}) {

    const dispatch = useDispatch();
    const content = useSelector(state => state.content.value);
    const regex = /(<([^>]+)>)/gi;

    useEffect(() => {
        getContent(route).then(object => {
            dispatch(pushContent(object));
        });
    },[]);

    const menuData = content.content.rendered.replace(regex, "").split(/\s+/).filter((i) => (i !== ""));
    console.log(menuData);

return (
    <>
        <div id="heading-container"><h2>EXPLORE</h2></div>
        <div id="card-container">
            <div className="card">
                <img className="card-photo" alt="community" src="/WordPress/wp-content/themes/wptwr/thumbnails/community.jpg" />
                <div className="card-text">Community</div>
            </div>
            {content.content.rendered.replace(regex, "")}
        </div>
    </>
    )
}
export default MainMenu;
