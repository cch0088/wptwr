import React, { useEffect } from "react";
import { API_POSTS, UI_FORUM } from "../../config";
import { pushForumPostContent } from "../../features/PostSlice";
import { useDispatch, useSelector } from "react-redux";
import { getContent } from "../../features/PageServices";
import { useNavigate } from "react-router-dom";
import { getDateFromString } from "../../lib/validation";

function ForumPost({postId}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const route = API_POSTS + postId;
    const post = useSelector(state => state.post.value);

    useEffect(() => {
        if (postId) {
            getContent(route).then(object => {
                dispatch(pushForumPostContent(object));
            });
        } else {
            navigate(UI_FORUM);
        }
    },[dispatch, route, postId, navigate]);

    const renderHTML = (content) => {
        return { __html: content };
    };

    return (
        <>
        {postId &&
            (<div className="forum-list-container">
                <div className="forum-section">
                    <div className="forum-category">{post.title.rendered}</div>
                    <div className="forum-post">
                        <div>{post.author} on {getDateFromString(post.date)}</div>
                        <div dangerouslySetInnerHTML={renderHTML(post.content.rendered)} />
                    </div>
                </div>
                <button className="forum-button">Add reply</button>
            </div>)
        }
        </>
    );
}

export default ForumPost;