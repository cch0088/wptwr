import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getDateFromString } from "../../lib/validation";

const ForumTopicContainer = ({
    postLoading,
    topic,
    error,
    replyOpen,
    setReplyOpen,
    replyLoading,
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

export default ForumTopicContainer;
