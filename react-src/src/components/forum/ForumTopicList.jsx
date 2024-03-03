import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { getDateFromString } from '../../lib/validation';

function ForumTopicList({categoryId, categoryName}) {

    const [topics, setTopics] = useState([]);
    const [heading, setHeading] = useState(categoryName);

    const TOPIC_LIST = gql`
        query getPostsByCategory(
                $categoryId: Int!
            )
        {
            posts(where: {categoryId: $categoryId}) {
                nodes {
                    postId
                    title
                    date
                    author { node { name } }
                    isSticky
                    editingLockedBy { node { name } }
                }
            }
        }`;

    const { loading, error, data } = useQuery(TOPIC_LIST, { variables: { categoryId } });

    useEffect(() => {
        if (loading) {
            setHeading('Loading...');
            setTopics([]);
        } else if (error) {
            setHeading('There was a problem with your request. Nothing to show here...');
            setTopics([]);
        } else {
            setHeading(null);
            setTopics(data.posts.nodes);
        }
    },[loading, error, data])

    return (
        <div className="forum-list-container">
            <div className="forum-section">
                <div className="forum-category">{categoryName}</div>
                <div>{heading}</div>
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
