import React, { useEffect } from "react";
import { API_CATEGORIES } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { getContent } from "../../features/PageServices";
import { pushForumContent } from "../../features/ForumSlice";

function ForumSite() {
    const route = API_CATEGORIES;

    const dispatch = useDispatch();
    const categories = useSelector(state => state.forum.value);

    useEffect(() => {
        getContent(route).then(object => {
            dispatch(pushForumContent(object));
        });
    },[dispatch, route]);

    console.log(categories.find((x) => x.parent === 2));
    console.log(categories.find((x) => x.id === 2));

    return (
        <>
            {categories.map((item) => {
                return (
                    (item.parent === 0) ?
                    <div key={item.id} className="forum-category">{item.name}</div>
                    : null
                );
            })}
        </>
    )
}
export default ForumSite;