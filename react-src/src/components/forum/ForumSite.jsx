import React, { useEffect } from "react";
import { API_CATEGORIES } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { getContent } from "../../features/PageServices";
import { pushForumContent } from "../../features/ForumSlice";
import { useNavigate } from "react-router-dom";
import { setCategory } from "../../features/CategorySlice";
import { UI_FORUM_THREADS } from "../../config";
import ForumListContainer from "./ForumListContainer";

function ForumSite() {
    const route = API_CATEGORIES;

    const dispatch = useDispatch();
    const categories = useSelector(state => state.forum.value);

    const navigate = useNavigate();

    useEffect(() => {
        getContent(route).then(object => {
            dispatch(pushForumContent(object));
        });
    },[dispatch, route]);

    const headings = [];
    const topics = [];

    categories.forEach(item => {
        if (item.parent > 0) {
            topics.push({
                id: item.id,
                name: item.name,
                description: item.description,
                link: item.link,
                parent: item.parent
            })
        }
        else {
            headings.push({
                id: item.id,
                name: item.description
            })
        }
    })

    const handleNavigation = (categoryId, categoryName) => {
        dispatch(setCategory({categoryId, categoryName}));
        navigate(UI_FORUM_THREADS);
    };

    return (
        <ForumListContainer
            handleNavigation={handleNavigation}
            headings={headings}
            topics={topics}
        />
    );
}
export default ForumSite;
