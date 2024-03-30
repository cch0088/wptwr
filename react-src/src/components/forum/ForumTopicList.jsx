import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { getDateFromString } from '../../lib/validation';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UI_FORUM, UI_FORUM_TOPIC } from '../../config';
import ForumTopicListContainer from './ForumTopicListContainer';

function ForumTopicList() {

    const navigate = useNavigate();
    const category = useSelector(state => state.category.value);

    const [topic, setTopic] = useState([]);
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
            setTopic(data.posts.nodes);
        } else {
            setHeading('Nothing to show here. Feel free to add a topic.');
        }
    },[loading, error, data, navigate])

    const handleNavigation = (postId) => {
        navigate(`${UI_FORUM_TOPIC}/:${postId}`);
    }

    return (
        <ForumTopicListContainer
            category={category}
            heading={heading}
            topic={topic}
            handleNavigation={handleNavigation}
            getDateFromString={getDateFromString}
            error={error}
            loading={loading}
        />
    );
}

export default ForumTopicList;
