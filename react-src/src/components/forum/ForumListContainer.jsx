import React from "react";

const ForumListContainer = ({topics, headings, handleNavigation}) =>
(
    topics && headings && (
        <div className="forum-list-container">
            {headings.map((header) => {
                return (
                    <div className="forum-section" key={header.id}>
                        <div className="forum-category">{header.name}</div>
                        {topics.filter((item) => item.parent === header.id)
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
