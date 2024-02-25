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

    const heading = [];
    const topic = [];

    categories.forEach(item => {
        if (item.parent > 0) {
            topic.push({
                id: item.id,
                name: item.name,
                description: item.description,
                link: item.link,
                parent: item.parent
            })
        }
        else {
            heading.push({
                id: item.id,
                name: item.name
            })
        }
    })

    return (
        <>
            {heading.map((header) => {
                return (
                    <div key={header.id}>
                        <div className="forum-category">{header.name}</div>
                        {topic.filter((item) => item.parent === header.id)
                            .map((i) => {
                                return (
                                    <div key={i.id}
                                        className="forum-topic"
                                    >
                                        <div><a href={i.link}>{i.name}</a></div>
                                        <div>{i.description}</div>
                                    </div>
                                );
                        })}
                    </div>
                );
            })}
        </>
    )
}
export default ForumSite;
