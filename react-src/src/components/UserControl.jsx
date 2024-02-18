import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/ModalSlice';
import Modal from './Modal';
import LoginForm from './forms/LoginForm';
import useAuth, { GET_USER } from '../hooks/useAuth';
import { gql, useMutation } from '@apollo/client';

function UserControl() {

    const modal = useSelector(state => state.modal.value);

    const history = useNavigate();
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
                (!loggedIn && !loading) ?
                <>
                    <span className="userbutton" onClick={() => { history.push("/register") }}>
                        <span role="img" aria-label="new">🆕</span> Sign Up
                    </span>
                    <span className="userbutton" onClick={() => { dispatch(openModal()) }}>
                        <span role="img" aria-label="head">👤</span> Log In
                    </span>
                </> :
                <>
                    <span className="userbutton" onClick={() => { history.push("/account") }}>
                        <span role="img" aria-label="head">👤</span> Account
                    </span>
                    <span className="userbutton" onClick={() => { logOut() }}>
                        <span role="img" aria-label="door">🚪</span> Log Out
                    </span>
                </>
            }
        </div>
    )
}
export default UserControl;
