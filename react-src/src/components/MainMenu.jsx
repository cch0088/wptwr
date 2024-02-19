import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContent } from "../features/PageServices";
import { pushContent } from "../features/ContentSlice";
import { WP_UPLOADS } from "../config";

function MainMenu({route}) {

    const dispatch = useDispatch();
    const menu = useSelector(state => state.content.value);

    useEffect(() => {
        getContent(route).then(object => {
            dispatch(pushContent(object));
        });
    },[dispatch, route]);

    const regex = /(<([^>]+)>)/gi;

    const menuData = menu[0]
        .content
        .rendered
        .replace(regex, '')
        .split(/\s+/)
        .filter((i) => (i !== ''));

    return (
        <div id="card-container">
            {menuData.map((str, i) => {
                const [name, link, image] = str.split(':');
                return (<a key={i} href={link} className="card">
                    <img className="card-photo" alt={name} src={`${WP_UPLOADS}/${image}`} />
                    <div className="card-text">{name}</div>
                </a>);
            })}
        </div>
    )
}

export default MainMenu;
