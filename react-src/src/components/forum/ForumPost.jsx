import React from "react";
import { gql, useQuery } from "@apollo/client";
import { getDateFromString } from "../../lib/validation";

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
    
    const { loading, error, data } = useQuery(FORUM_POST,
        { variables: { postId } });

    const renderHTML = (content) => {
        return { __html: content };
    };

    return (
        <>
        {!loading && !error &&
            (<div className="forum-list-container">
                <div className="forum-section">
                    <div className="forum-category">{data.posts.nodes[0].title}</div>
                    <div className="forum-post">
                        <div className="forum-post-info">{data.posts.nodes[0].author.node.name} on {getDateFromString(data.posts.nodes[0].date)}</div>
                        <div dangerouslySetInnerHTML={renderHTML(data.posts.nodes[0].content)} />
                    </div>
                    {data.posts.nodes[0].comments.edges.map((x) => (
                        <div key={x.node.databaseId} className="forum-post">
                            <div className="forum-post-info">{x.node.author.node.name} on {getDateFromString(x.node.date)}</div>
                            <div dangerouslySetInnerHTML={renderHTML(x.node.content)} />
                        </div>
                    ))}
                </div>
                <button className="forum-button">Add reply</button>
            </div>)
        }
        </>
    );
}

export default ForumPost;