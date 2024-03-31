import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getDateFromString } from '../../lib/validation';

const ForumTopicListContainer = ({
    category,
    heading,
    topic,
    handleNavigation,
    handleNewTopic,
    error,
    loading,
    setNewTopicOpen,
    newTopicOpen,
    content,
    setContent,
    title,
    setTitle,
    newTopicLoading,
    newTopicDisabled
}) =>
(
    <div className="forum-list-container">
        <div className="forum-section">
            <div className="forum-category">{category.categoryName}</div>
            <div>{heading}</div>
            {topic.map((topic) => (
                <div key={topic.postId}
                    id={topic.postId}
                    className="forum-topic"
                    onClick={() => handleNavigation(topic.postId)}
                >
                    <span className="bubble" role="img" aria-label="topic">🗨️</span>
                    <div className="forum-topic-node">
                        <div className="forum-topic-name">{topic.title}</div>
                        <div className="forum-topic-description">
                            By {topic.author.node.name} on {getDateFromString(topic.date)}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        {!error && !loading &&
        (!newTopicOpen
        ? <>
        {
            newTopicDisabled
            ? <div>You must be logged in to create a new topic.</div>
            : <button onClick={() => setNewTopicOpen(true)} className="forum-button">New topic</button>
        }
        </>
        : <>
            <div id="new-topic-container">
            <input className="new-topic-title"
                type="text"
                name="title"
                value={title}
                onChange={(e) => { setTitle(e.target.value); }}
            />
            </div>
            <div id="text-editor-container">
                <ReactQuill
                    theme="snow"
                    value={content}
                    onChange={setContent}
                />
            </div>
            <button disabled={
                newTopicLoading
                || content === "<p><br></p>"
                || !content
                || !title
                || newTopicDisabled
            } onClick={() => handleNewTopic()} className="forum-button">Add topic</button>
        </>
        )}
    </div>
);

export default ForumTopicListContainer;
