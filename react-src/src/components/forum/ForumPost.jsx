import React, { useEffect, useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { gql, useMutation, useQuery } from "@apollo/client";
import { getDateFromString } from "../../lib/validation";
import { useNavigate } from "react-router-dom";
import { UI_FORUM } from "../../config";

function ForumPost({postId}) {

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
    const [newPost, setNewPost] = useState();

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
        })
        .then(
            appendPost(content)
        );
    }

    const appendPost = (content) => {
        setNewPost({
            author: "new",
            date: "just now",
            content
        });
        setReplyOpen(false);
    }

    useEffect(() => {
        if (error) {
            navigate(UI_FORUM);
        }
    },[error, navigate])

    return (
            <div className="forum-list-container">
                {postLoading && (
                    <div className="forum-section">
                        <div>Loading...</div>
                    </div>
                )}
                {!postLoading && !error && (
                <>
                    <div className="forum-section">
                        <div className="forum-category">{data.posts.nodes[0].title}</div>
                        <div className="forum-post">
                            <div className="forum-post-info">{data.posts.nodes[0].author.node.name} on {getDateFromString(data.posts.nodes[0].date)}</div>
                            <div dangerouslySetInnerHTML={renderHTML(data.posts.nodes[0].content)} />
                        </div>
                        {data.posts.nodes[0].comments.edges.map((post) => (
                            <div key={post.node.databaseId} className="forum-post">
                                <div className="forum-post-info">{post.node.author.node.name} on {getDateFromString(post.node.date)}</div>
                                <div dangerouslySetInnerHTML={renderHTML(post.node.content)} />
                            </div>
                        ))}
                        {newPost && 
                            <div className="forum-post">
                                <div className="forum-post-info">{newPost.author} on {newPost.date}</div>
                                <div dangerouslySetInnerHTML={renderHTML(newPost.content)} />
                            </div>
                        }
                    </div>
                    {
                        !replyOpen
                        ? <button className="forum-button" disabled={newPost} onClick={() => setReplyOpen(true)}>Add reply</button>
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

export default ForumPost;
