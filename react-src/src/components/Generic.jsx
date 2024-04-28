import React, { useEffect } from "react";
import { renderHTML } from "../lib/convert";
import { API_PAGES } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { pushContent } from "../features/ContentSlice";
import { getContent } from "../features/PageServices";

const Generic = ({slug}) => {

    const route = API_PAGES + slug;
    const markup = useSelector(state => state.content.value);
    const dispatch = useDispatch();

    useEffect(() => {
        getContent(route).then(object => {
            dispatch(pushContent(object));
        });
    },[dispatch, route]);

    return(
        <div dangerouslySetInnerHTML={renderHTML(markup[0].content.rendered)} />
    )};

export default Generic;
