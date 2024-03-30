import React, { useEffect, useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { gql, useMutation, useQuery } from "@apollo/client";
import { getDateFromString } from "../../lib/validation";
import { useNavigate, useParams } from "react-router-dom";
import { UI_FORUM } from "../../config";

function ForumTopic() {
    const { fromUrlPostId } = useParams();
    const postId = Number(fromUrlPostId.replace(':', ''));

    const FORUM_POST = gql`
        query getPostById($postId: Int!) {
            posts(where: {id: $postId}) {
            nodes {
                databaseId
                title
                content
                author { node {
                    name
                    avatar { url } } }
                date
                comments(where: {orderby: COMMENT_DATE, order: ASC}) {
                edges { node {
                    databaseId
                    content
                    date
                    author { node {
                        name
                        avatar { url } } } } } } } } }`;

    const FORUM_REPLY = gql`
        mutation AddReply($commentOn: Int!, $content: String!) {
            createComment(input: {
                    content: $content,
                    commentOn: $commentOn
            })
            {
                clientMutationId
                success
            }
        }`;

    const [replyOpen, setReplyOpen] = useState(false);
    const [content, setContent] = useState('');
    const [topic, setTopic] = useState();

    const { loading: postLoading, error, data } = useQuery(FORUM_POST,
        { variables: { postId } });

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
            <div className="forum-list-container">
                {postLoading && (
                    <div className="forum-section">
                        <div>Loading...</div>
                    </div>
                )}
                {topic && !error && (
                <>
                    <div className="forum-section">
                        <div className="forum-category">{topic.title}</div>
                        <div className="forum-post">
                            <div className="forum-post-info">{topic.author.node.name} on {getDateFromString(topic.date)}</div>
                            <div dangerouslySetInnerHTML={renderHTML(topic.content)} />
                        </div>
                        {topic.comments.edges.map((post) => (
                            <div key={post.node.databaseId} className="forum-post">
                                <div className="forum-post-info">{post.node.author.node.name} on {getDateFromString(post.node.date)}</div>
                                <div dangerouslySetInnerHTML={renderHTML(post.node.content)} />
                            </div>
                        ))}
                    </div>
                    {
                        !replyOpen
                        ? <button className="forum-button" onClick={() => setReplyOpen(true)}>Add reply</button>
                        :
                        <>
                            <div id="text-editor-container">
                                <ReactQuill
                                    theme="snow"
                                    value={content}
                                    onChange={setContent}
                                />
                            </div>
                            <button className="forum-button" disabled={replyLoading} onClick={() => submitReply()}>Send reply</button>
                        </>
                    }
                </>
                )}
            </div>
    );
}

export default ForumTopic;
