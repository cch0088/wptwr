import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/ModalSlice';
import Modal from './Modal';
import LoginForm from './forms/LoginForm';
import useAuth, { GET_USER } from '../hooks/useAuth';
import { gql, useMutation } from '@apollo/client';
import { UI_ACCOUNT, UI_REGISTER } from '../config';

function UserControl() {

    const modal = useSelector(state => state.modal.value);

    const dispatch = useDispatch();
    const {loggedIn, loading} = useAuth();

    const LOG_OUT = gql`
        mutation logOut {
            logout(input: {})
            { status }
        }`;

    const [logOut] = useMutation(LOG_OUT, {
        refetchQueries: [
            { query: GET_USER }
        ],
    });

return (
        <div id="usercontrol">
            { modal.show && <Modal children={ <LoginForm /> }/> }
            {
                (!loggedIn && !loading) &&
                <>
                    <a className="userbutton" href={UI_REGISTER}>
                        <span role="img" aria-label="new">🆕</span> Sign Up
                    </a>
                    <u className="userbutton" onClick={() => { dispatch(openModal()) }}>
                        <span role="img" aria-label="head">👤</span> Log In
                    </u>
                </>
            }
            {
                (loggedIn && !loading) &&
                <>
                    <a className="userbutton" href={UI_ACCOUNT}>
                        <span role="img" aria-label="head">👤</span> Account
                    </a>
                    <u className="userbutton" onClick={() => { logOut() }}>
                        <span role="img" aria-label="door">🚪</span> Log Out
                    </u>
                </>
            }
            {
                (loading) &&
                <>
                    <u className="userbutton">
                        <span role="img" aria-label="hourglass">⏳</span> Loading...
                    </u>
                </>
            }
        </div>
    )
}
export default UserControl;
