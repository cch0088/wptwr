import React, { useEffect } from "react";
import { API_CATEGORIES } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { getContent } from "../../features/PageServices";
import { pushForumContent } from "../../features/ForumSlice";
import { useNavigate } from "react-router-dom";
import { setCategory } from "../../features/CategorySlice";
import { UI_FORUM_THREADS } from "../../config";

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
                name: item.description
            })
        }
    })

    const handleNavigation = (categoryId, categoryName) => {
        dispatch(setCategory({categoryId, categoryName}));
        navigate(UI_FORUM_THREADS);
    };

    return (
        <div className="forum-list-container">
            {heading.map((header) => {
                return (
                    <div className="forum-section" key={header.id}>
                        <div className="forum-category">{header.name}</div>
                        {topic.filter((item) => item.parent === header.id)
                            .map((i) => {
                                return (
                                    <div key={i.id}
                                        className="forum-topic"
                                        onClick={(e) => handleNavigation(i.id, i.name)}
                                    >
                                        <span className="bubble" role="img" aria-label="topic">🗨️</span>
                                        <div className="forum-topic-node">
                                            <div className="forum-topic-name">{i.name}</div>
                                            <div className="forum-topic-description">{i.description}</div>
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </div>
                );
            })}
        </div>
    );
}
export default ForumSite;
