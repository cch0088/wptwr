import React from "react";

const ForumListContainer = ({topic, heading, handleNavigation}) =>
(
    topic && heading && (
        <div className="forum-list-container">
            {heading.map((header) => {
                return (
                    <div className="forum-section" key={header.id}>
                        <div className="forum-category">{header.name}</div>
                        {topic.filter((item) => item.parent === header.id)
                            .map((i) => {
                                return (
                                    <div key={i.id}
                                        className="forum-topic"
                                        onClick={() => handleNavigation(i.id, i.name)}
                                    >
                                        <span className="bubble" role="img" aria-label="topic">🗨️</span>
                                        <div className="forum-topic-node">
                                            <div className="forum-topic-name">{i.name}</div>
                                            <div className="forum-topic-description">{i.description}</div>
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </div>
                );
            })}
        </div>
    )
);

export default ForumListContainer;
