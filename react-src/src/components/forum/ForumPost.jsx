import React, { useEffect } from "react";
import { API_POSTS, API_USERS, UI_FORUM } from "../../config";
import { pushForumPostContent } from "../../features/PostSlice";
import { useDispatch, useSelector } from "react-redux";
import { getContent } from "../../features/PageServices";
import { useNavigate } from "react-router-dom";
import { getDateFromString } from "../../lib/validation";
import { pushUserDetails } from "../../features/UserSlice";

function ForumPost({postId}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const posts = API_POSTS + postId;
    const users = API_USERS;
    const post = useSelector(state => state.post.value);
    const user = useSelector(state => state.user.value);

    useEffect(() => {
        if (postId) {
            getContent(posts).then(object => {
                dispatch(pushForumPostContent(object));
            });
            getContent(users).then(object => {
                dispatch(pushUserDetails(object));
            });
        } else {
            navigate(UI_FORUM);
        }
    },[dispatch, posts, users, postId, navigate]);

    const userObj = user.find((x) => x.id === post.author);

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
                        <div>{(userObj && userObj.name)} on {getDateFromString(post.date)}</div>
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