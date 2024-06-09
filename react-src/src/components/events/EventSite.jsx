import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { EVENTS_CATEGORY } from '../../config';
import { EVENTS_LIST } from '../../gql';
import useAuth from '../../hooks/useAuth';
import NewEventForm from './NewEventForm';

export default function EventSite() {
    const [newEventOpen, setNewEventOpen] = useState(false);
    const { loggedIn } = useAuth();
    const { loading, error, data } = useQuery(EVENTS_LIST, {
        variables: {
            categoryName: EVENTS_CATEGORY
        }
    });

    return (
        <NewEventForm
            loading={loading}
            error={error}
            data={data}
            loggedIn={loggedIn}
            newEventOpen={newEventOpen}
            setNewEventOpen={setNewEventOpen}
        />
    );
}
