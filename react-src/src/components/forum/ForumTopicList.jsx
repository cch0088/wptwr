import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';

function ForumTopicList({categoryId}) {

    const [topics, setTopics] = useState([]);

    const TOPIC_LIST = gql`
        query getPostsByCategory(
                $categoryId: Int = 1
            )
        {
            posts(where: {categoryId: $categoryId}) {
                edges {
                    node {
                    title
                    author {
                        node {
                            name
                        }
                    }
                        date
                    }
                }
            }
        }`;

    const { loading, data } = useQuery(TOPIC_LIST, { variables: { categoryId: 12 } });

    useEffect(() => {
        !loading && setTopics(data.posts.edges);
    },[loading, data])

    console.log(topics.map(x => x.node));

    return (
        <div className="forum-list-container">
            <div className="forum-section">
                <div className="forum-category">General Discussion Forum</div>
                {topics.map((topic) => (
                    <div key={topic.node.title}
                        id={topic.node.title}
                        className="forum-topic"
                    >
                        <span className="bubble" role="img" aria-label="topic">🗨️</span>
                        <div className="forum-topic-node">
                            <div className="forum-topic-name">{topic.node.title}</div>
                            <div className="forum-topic-description">
                                {topic.node.author.node.name} ... {topic.node.date}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ForumTopicList;
