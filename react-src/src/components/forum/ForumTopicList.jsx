import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { getDateFromString } from '../../lib/validation';

function ForumTopicList({categoryId}) {

    const [topics, setTopics] = useState([]);

    const TOPIC_LIST = gql`
        query getPostsByCategory(
                $categoryId: Int = 1
            )
        {
            posts(where: {categoryId: $categoryId}) {
                nodes {
                    categories { nodes { name } }
                    postId
                    title
                    date
                    author { node { name } }
                    isSticky
                    editingLockedBy { node { name } }
                }
            }
        }`;

    const { loading, data } = useQuery(TOPIC_LIST, { variables: { categoryId: 12 } });

    useEffect(() => {
        !loading && setTopics(data.posts.nodes);
    },[loading, data])

    return (
        <div className="forum-list-container">
            <div className="forum-section">
                <div className="forum-category">General Discussion Forum</div>
                {topics.map((topic) => (
                    <div key={topic.postId}
                        id={topic.postId}
                        className="forum-topic"
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
        </div>
    );
}

export default ForumTopicList;
