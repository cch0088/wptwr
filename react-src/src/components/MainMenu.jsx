import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContent } from "../features/PageServices";
import { pushContent } from "../features/ContentSlice";
import { WP_UPLOADS } from "../config";

function MainMenu({route}) {

    const dispatch = useDispatch();
    const content = useSelector(state => state.content.value);
    
    useEffect(() => {
        getContent(route).then(object => {
            dispatch(pushContent(object));
        });
    },[]);
    
    const regex = /(<([^>]+)>)/gi;

    const menuData = content
        .content
        .rendered
        .replace(regex, "")
        .split(/\s+/)
        .filter((i) => (i !== ""));

return (
    <>
        <div id="heading-container"><h2>EXPLORE</h2></div>
        <div id="card-container">
            {menuData.map(str => {
                const [name, link, image] = str.split(":");
                return (<div className="card">
                    <img className="card-photo" alt={name} src={`${WP_UPLOADS}/${image}`} />
                    <div className="card-text">{name}</div>
                </div>);
            })}
        </div>
    </>
    )
}
export default MainMenu;
