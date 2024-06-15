import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { EVENTS_CATEGORY } from '../../config';
import { EVENTS_LIST, NEW_EVENT } from '../../gql';
import useAuth from '../../hooks/useAuth';
import NewEventForm from './NewEventForm';

export default function EventSite() {
    const [newEventOpen, setNewEventOpen] = useState(false);

    const [eventData, setEventData] = useState();
    const [date, setDate] = useState();
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [category, setCategory] = useState();
    const [duration, setDuration] = useState();
    const [location, setLocation] = useState();

    const { loggedIn, user } = useAuth();
    const { loading, error, data } = useQuery(EVENTS_LIST, {
        variables: {
            categoryName: EVENTS_CATEGORY
        }
    });

    const [addNewEvent, { loading: newEventLoading } ] = useMutation(NEW_EVENT);

    const insertEvent = (postId, title) => {
        const newEvent = {
            __typename: "Post",
            postId,
            title,
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
        setEventData([...eventData, newEvent]);
    }

    const handleNewEvent = () => {
        addNewEvent({
            variables: {
                slug: EVENTS_CATEGORY,
                title,
                content
            }
        }).then((newPost) =>
            insertEvent(newPost.data.createPost.post.postId, title)
        );
        setNewEventOpen(false);
    }

    return (
        <NewEventForm
            loading={loading}
            error={error}
            data={data}
            loggedIn={loggedIn}
            newEventOpen={newEventOpen}
            title={title}
            content={content}
            category={category}
            date={date}
            duration={duration}
            location={location}
            setTitle={setTitle}
            setDate={setDate}
            setContent={setContent}
            setCategory={setCategory}
            setDuration={setDuration}
            setLocation={setLocation}
            setNewEventOpen={setNewEventOpen}
            handleNewEvent={handleNewEvent}
            newEventLoading={newEventLoading}
        />
    );
}
