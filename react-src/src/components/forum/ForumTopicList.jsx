import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { API_CATEGORIES, UI_FORUM, UI_FORUM_TOPIC } from '../../config';
import { FORUM_NEW_TOPIC, TOPIC_LIST } from '../../gql';
import ForumTopicListContainer from './ForumTopicListContainer';
import { setCategory } from '../../features/CategorySlice';
import { getContent } from '../../features/PageServices';
import useAuth from '../../hooks/useAuth';

function ForumTopicList() {
    const { loggedIn, user } = useAuth();

    const { fromUrlCategoryId } = useParams();
    const categoryId = Number(fromUrlCategoryId.replace(':', ''));

    const dispatch = useDispatch();

    const route = API_CATEGORIES;
    const category = useSelector(state => state.category.value);

    const navigate = useNavigate();

    const [topic, setTopic] = useState([]);
    const [title, setTitle] = useState('');
    const [heading, setHeading] = useState(category.categoryName);
    const [content, setContent] = useState('');

    const [newTopicOpen, setNewTopicOpen] = useState(false);
    const [addNewTopic, { loading: newTopicLoading } ] = useMutation(FORUM_NEW_TOPIC);

    const { loading, error, data } = useQuery(TOPIC_LIST, { variables: { categoryId } });

    useEffect(() => {
        getContent(`${route}/${categoryId}`)
        .then(object => {
            dispatch(
                setCategory({
                    categoryId: object.id,
                    categoryName: object.name,
                    categorySlug: object.slug
            }))});
        if (loading) {
            setHeading('Loading...');
        } else if (error || categoryId < 1) {
            navigate(UI_FORUM);
        } else if (data.posts.nodes[0]) {
            setHeading(null);
            setTopic(data.posts.nodes);
        } else {
            setHeading('Nothing to show here. Feel free to add a topic.');
        }
        // eslint-disable-next-line
    },[loading, categoryId])

    const handleNavigation = (postId) => {
        navigate(`${UI_FORUM_TOPIC}/:${postId}`);
    }

    const insertTopic = (postId, title) => {
        const newPost = {
            __typename: "Post",
            postId,
            title,
            date: new Date(),
            author: {
            __typename: "NodeWithAuthorToUserConnectionEdge",
                node: {
                    __typename: "User",
                    name: user.username
                }
            },
            "isSticky": false,
            "editingLockedBy": null
        };
        setTopic([...topic, newPost]);
    }

    const handleNewTopic = () => {
        addNewTopic({
            variables: {
                slug: category.categorySlug,
                title,
                content
            }
        }).then((newPost) =>
            insertTopic(newPost.data.createPost.post.postId, title)
        );
        setNewTopicOpen(false);
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
            newTopicLoading={newTopicLoading}
            newTopicDisabled={!loggedIn}
            setTitle={setTitle}
            handleNavigation={handleNavigation}
            handleNewTopic={handleNewTopic}
            setNewTopicOpen={setNewTopicOpen}
            setContent={setContent}
        />
    );
}

export default ForumTopicList;
