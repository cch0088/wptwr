import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { FORUM_GET_POSTS, FORUM_REPLY } from "../../gql";
import { UI_FORUM } from "../../config";
import { renderHTML } from "../../lib/convert";
import ForumTopicContainer from "./ForumTopicContainer";
import useAuth from "../../hooks/useAuth";

function ForumTopic() {
    const { loggedIn, user } = useAuth();
    const { fromUrlPostId } = useParams();
    const postId = Number(fromUrlPostId.replace(':', ''));

    const [replyOpen, setReplyOpen] = useState(false);
    const [replyDisabled, setReplyDisabled] = useState(false);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [topic, setTopic] = useState();

    const { loading: postLoading, error, data } = useQuery(FORUM_GET_POSTS, { variables: { postId } });
    const [sendReply, { loading: replyLoading }] = useMutation(FORUM_REPLY);

    const navigate = useNavigate();

    const insertReply = (content) => {
        const newPost = {
            __typename: "PostToCommentConnectionEdge",
            node: {
                __typename: "Comment",
                databaseId: 0,
                content,
                date: new Date(),
                author: {
                    __typename: "CommentToCommenterConnectionEdge",
                    node: {
                        __typename: "User",
                        name: user.username,
                        avatar: user.avatar
                    }
                }
            }
        };
        const edges = [ ...topic.comments.edges, newPost ];
        const comments = { ...topic.comments, edges };
        setTopic({...topic, comments});
    }

    const submitReply = () => {
        setReplyOpen(false);
        setReplyDisabled(true);
        sendReply({
            variables: {
                commentOn: postId,
                content,
            }
        }).then(!replyLoading && insertReply(content));
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
            loggedIn={loggedIn}
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
            replyDisabled={!loggedIn || replyDisabled}
            renderHTML={renderHTML}
        />
    );
}

export default ForumTopic;
