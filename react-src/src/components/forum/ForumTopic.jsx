import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { FORUM_GET_POSTS, FORUM_REPLY } from "../../gql";
import { UI_FORUM } from "../../config";
import { renderHTML } from "../../lib/convert";
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

    const navigate = useNavigate();

    const insertReply = (content) => {
        const newPost = {
            __typename: "PostToCommentConnectionEdge",
            node: {
                __typename: "Comment",
                databaseId: 0,
                content,
                date: "2024-03-31 12:52:34",
                author: {
                    __typename: "CommentToCommenterConnectionEdge",
                    node: {
                        __typename: "User",
                        name: "loggedinusername",
                        avatar: {
                            "__typename": "Avatar",
                            "url": "https://secure.gravatar.com/avatar/ca73d1432f9b2bf71ce39ecea5756c11?s=96&d=mm&r=g"
                        }
                    }
                }
            }
        };
        const edges = [ ...topic.comments.edges, newPost ];
        const comments = { ...topic.comments, edges };
        setTopic({...topic, comments});
    }

    const submitReply = () => {
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
