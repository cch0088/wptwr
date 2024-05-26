import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getDateFromString } from "../../lib/validation";

const ForumTopicContainer = ({
    postLoading,
    loggedIn,
    topic,
    error,
    replyOpen,
    setReplyOpen,
    replyLoading,
    replyDisabled,
    submitReply,
    renderHTML,
    setContent,
    content
}) => (
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
                    <div className="forum-post-owner">
                        <img alt="avatar" src={topic.author.node.avatar.url} />
                        {topic.author.node.name}
                    </div>
                    <div className="forum-post-info">Post #1 {getDateFromString(topic.date)}</div>
                    <div dangerouslySetInnerHTML={renderHTML(topic.content)} />
                </div>
                {topic.comments.edges.map((post, count) => (
                    <div key={post.node.databaseId} className="forum-post">
                        <div className="forum-post-owner">
                            <img alt="avatar" src={post.node.author.node.avatar.url} />
                            {post.node.author.node.name}
                        </div>
                        <div className="forum-post-info">Post #{count + 2} {getDateFromString(post.node.date)}</div>
                        <div dangerouslySetInnerHTML={renderHTML(post.node.content)} />
                    </div>
                ))}
            </div>
            {
                !replyOpen
                ? <>
                    {
                        replyDisabled
                        ? loggedIn
                            ? <div>You replied to this post.</div>
                            : <div>You must be logged in to post a reply.</div>
                        : <button className="forum-button" onClick={() => setReplyOpen(true)}>Add reply</button>
                    }
                </>
                : <>
                    <div id="text-editor-container">
                        <ReactQuill
                            theme="snow"
                            value={content}
                            onChange={setContent}
                        />
                    </div>
                    <button className="forum-button" disabled={
                        replyLoading
                        || content === "<p><br></p>"
                        || !content
                        || replyDisabled
                    } onClick={() => submitReply()}>Add reply</button>
                </>
            }
        </>
        )}
    </div>
);

export default ForumTopicContainer;
