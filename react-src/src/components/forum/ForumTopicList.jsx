import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UI_FORUM, UI_FORUM_TOPIC } from '../../config';
import { FORUM_NEW_TOPIC, TOPIC_LIST } from '../../gql';
import ForumTopicListContainer from './ForumTopicListContainer';

function ForumTopicList() {

    const navigate = useNavigate();
    const category = useSelector(state => state.category.value);

    const [topic, setTopic] = useState([]);
    const [title, setTitle] = useState('');
    const [heading, setHeading] = useState(category.categoryName);
    const [content, setContent] = useState('');

    const [newTopicOpen, setNewTopicOpen] = useState(false);
    const [addNewTopic] = useMutation(FORUM_NEW_TOPIC);

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

    const handleNewTopic = () => {
        addNewTopic({
            variables: {
                id: category.categoryId,
                content,
                title
            }
        })
        .catch(_er => console.log(_er));
    }

    return (
        <ForumTopicListContainer
            category={category}
            error={error}
            heading={heading}
            topic={topic}
            loading={loading}
            newTopicOpen={newTopicOpen}
            content={content}
            title={title}
            setTitle={setTitle}
            handleNavigation={handleNavigation}
            handleNewTopic={handleNewTopic}
            setNewTopicOpen={setNewTopicOpen}
            setContent={setContent}
        />
    );
}

export default ForumTopicList;
