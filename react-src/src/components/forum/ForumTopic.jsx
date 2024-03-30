import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { FORUM_POST, FORUM_REPLY } from "../../gql";
import { UI_FORUM } from "../../config";
import ForumTopicContainer from "./ForumTopicContainer";

function ForumTopic() {
    const { fromUrlPostId } = useParams();
    const postId = Number(fromUrlPostId.replace(':', ''));

    const [replyOpen, setReplyOpen] = useState(false);
    const [content, setContent] = useState('');
    const [topic, setTopic] = useState();

    const { loading: postLoading, error, data } = useQuery(FORUM_POST, { variables: { postId } });
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
        }).then(navigate(0));
    }

    useEffect(() => {
        if (error) {
            navigate(UI_FORUM);
        } else {
            data && setTopic(data.posts.nodes[0]);
        }
    },[error, navigate, data])

    return (
        <ForumTopicContainer
            postLoading={postLoading}
            topic={topic}
            error={error}
            replyOpen={replyOpen}
            content={content}
            replyLoading={replyLoading}
            setReplyOpen={setReplyOpen}
            setContent={setContent}
            submitReply={submitReply}
            renderHTML={renderHTML}
        />
    );
}

export default ForumTopic;
