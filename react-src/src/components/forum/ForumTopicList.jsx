import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { getDateFromString } from '../../lib/validation';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UI_FORUM } from '../../config';

function ForumTopicList() {

    const category = useSelector(state => state.category.value);
    const navigate = useNavigate();

    const [topics, setTopics] = useState([]);
    const [heading, setHeading] = useState(category.categoryName);

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

    const { loading, error, data } = useQuery(TOPIC_LIST,
        { variables: { categoryId: category.categoryId } });

    useEffect(() => {
        if (loading) {
            setHeading('Loading...');
        } else if (error) {
            navigate(UI_FORUM);
        } else if (data.posts.nodes[0]) {
            setHeading(null);
            setTopics(data.posts.nodes);
        } else {
            setHeading('Nothing to show here. Feel free to add a topic.');
        }
    },[loading, error, data, navigate])

    return (
        <div className="forum-list-container">
            <div className="forum-section">
                <div className="forum-category">{category.categoryName}</div>
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
            {!error && !loading && <button className="forum-button">New topic</button>}
        </div>
    );
}

export default ForumTopicList;
