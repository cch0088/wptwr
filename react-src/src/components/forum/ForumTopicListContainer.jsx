import React from "react";

const ForumTopicListContainer = ({
    category,
    heading,
    topic,
    handleNavigation,
    getDateFromString,
    error,
    loading
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
        {!error && !loading && <button className="forum-button">New topic</button>}
    </div>
);

export default ForumTopicListContainer;