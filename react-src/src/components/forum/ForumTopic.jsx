import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { FORUM_GET_POSTS, FORUM_REPLY } from "../../gql";
import { UI_FORUM } from "../../config";
import ForumTopicContainer from "./ForumTopicContainer";
import useAuth from "../../hooks/useAuth";

function ForumTopic() {
    const { loggedIn } = useAuth();

    const { fromUrlPostId } = useParams();
    const postId = Number(fromUrlPostId.replace(':', ''));

    const [replyOpen, setReplyOpen] = useState(false);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [topic, setTopic] = useState();

    const { loading: postLoading, error, data } = useQuery(FORUM_GET_POSTS, { variables: { postId } });
    const [sendReply, { loading: replyLoading }] = useMutation(FORUM_REPLY);

    const renderHTML = (content) => {
        return { __html: content };
    };

    const navigate = useNavigate();

    const submitReply = () => {
        sendReply({
            variables: {
                commentOn: postId,
                content,
            }
        }).then(!replyLoading && navigate(0));
    }

    useEffect(() => {
        if (error) {
            navigate(UI_FORUM);
        } else {
            data && setTopic(data.posts.nodes[0]);
        }
        // eslint-disable-next-line
    },[error, data])

    return (
        <ForumTopicContainer
            postLoading={postLoading}
            topic={topic}
            error={error}
            replyOpen={replyOpen}
            content={content}
            replyLoading={replyLoading}
            title={title}
            setTitle={setTitle}
            setReplyOpen={setReplyOpen}
            setContent={setContent}
            submitReply={submitReply}
            replyDisabled={!loggedIn}
            renderHTML={renderHTML}
        />
    );
}

export default ForumTopic;
