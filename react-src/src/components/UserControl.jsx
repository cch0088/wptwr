import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/ModalSlice';
import Modal from './Modal';
import LoginForm from './forms/LoginForm';
import useAuth, { GET_USER } from '../hooks/useAuth';
import { gql, useMutation } from '@apollo/client';
import { UI_ACCOUNT } from '../config';
import RegisterForm from './forms/RegisterForm';
import ConfirmForm from './forms/ConfirmForm';
import ResetByEmailForm from './forms/ResetByEmailForm';
import PasswordForm from './forms/PasswordForm';

function UserControl() {

    const modal = useSelector(state => state.modal.value);
    const [form, setForm] = useState(0);

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

    const openForm = (i) => {
        setForm(i);
        dispatch(openModal());
    }

return (
        <div id="usercontrol">
            { form === 0 && modal.show && <Modal children={ <ConfirmForm /> }/> }
            { form === 1 && modal.show && <Modal children={ <LoginForm setForm={setForm} /> }/> }
            { form === 2 && modal.show && <Modal children={ <RegisterForm setForm={setForm} /> }/> }
            { form === 3 && modal.show && <Modal children={ <ResetByEmailForm setForm={setForm} /> }/> }
            { form === 4 && modal.show && <Modal children={ <PasswordForm setForm={setForm} key={'keyfromemail'} /> }/> }
            {
                (!loggedIn && !loading) &&
                <>
                    <span className="userbutton" onClick={() => { openForm(2) }}>
                        <span role="img" aria-label="new">🆕</span> Sign Up
                    </span>
                    <span className="userbutton" onClick={() => { openForm(1) }}>
                        <span role="img" aria-label="head">👤</span> Log In
                    </span>
                </>
            }
            {
                (loggedIn && !loading) &&
                <>
                    <a className="userbutton" href={UI_ACCOUNT}>
                        <span role="img" aria-label="head">👤</span> Account
                    </a>
                    <span className="userbutton" onClick={() => { logOut() }}>
                        <span role="img" aria-label="door">🚪</span> Log Out
                    </span>
                </>
            }
            {
                (loading) &&
                <>
                    <span className="userbutton">
                        <span role="img" aria-label="hourglass">⏳</span> Loading...
                    </span>
                </>
            }
        </div>
    )
}
export default UserControl;
