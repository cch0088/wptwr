import React from "react";
import { useMutation } from '@apollo/client';
import { getRoot } from '../../lib/validation';
import { useNavigate } from 'react-router-dom';
import { WP_ROOT } from '../../config';
import { DELETE_USER } from '../../gql';
import { useSelector } from "react-redux";

export default function Profile() {

    const navigate = useNavigate();
    const user = useSelector(state => state.user.value);

    const [deleteUser, { loading }] = useMutation(DELETE_USER);

    function handleSubmit(e) {
        e.preventDefault();

        deleteUser({
            variables: {
                id: user.id
            },
            })
        .then((_status) => navigate(getRoot(WP_ROOT)));
    }

return (
        <div>
            <p>Welcome {user.username}</p>
            <input className="button"
                type="submit"
                name="delete"
                value="Delete Me"
                onClick={(e) => { handleSubmit(e); }}
                disabled={loading}
            />
        </div>
    )
}
