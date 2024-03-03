import React, { useEffect } from "react";
import { API_POSTS } from "../../config";
import { pushForumPostContent } from "../../features/PostSlice";
import { useDispatch } from "react-redux";
import { getContent } from "../../features/PageServices";

function ForumPost({postId}) {

    const dispatch = useDispatch();
    const route = API_POSTS + postId;

    useEffect(() => {
        getContent(route).then(object => {
            dispatch(pushForumPostContent(object));
            console.log(postId);
            console.log(object);
        });
    },[dispatch, route]);

    return (
        <div className="forum-list-container">
            Test
        </div>
    );
}

export default ForumPost;