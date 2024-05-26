import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/ModalSlice';
import { useMutation } from '@apollo/client';
import { GET_USER, LOG_OUT } from '../gql';
import { UI_ACCOUNT } from '../config';
import Modal from './Modal';
import LoginForm from './forms/LoginForm';
import useAuth from '../hooks/useAuth';
import RegisterForm from './forms/RegisterForm';
import ConfirmForm from './forms/ConfirmForm';
import ConfirmFormRegister from './forms/ConfirmFormRegister';
import ResetByEmailForm from './forms/ResetByEmailForm';

export default function UserControl() {

    const modal = useSelector(state => state.modal.value);
    const [form, setForm] = useState(0);
    const [blockClose, setBlockClose] = useState(false);

    const dispatch = useDispatch();
    const {loggedIn, loading, user} = useAuth();

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
            { form === 0 && modal.show && <Modal children={ <ConfirmForm /> } disableClose={false} /> }
            { form === 1 && modal.show && <Modal children={ <LoginForm setForm={setForm} /> } disableClose={false} /> }
            { form === 2 && modal.show && <Modal children={ <RegisterForm setForm={setForm} setBlockClose={setBlockClose} /> } disableClose={blockClose} /> }
            { form === 3 && modal.show && <Modal children={ <ResetByEmailForm setForm={setForm} setBlockClose={setBlockClose} /> } disableClose={blockClose} /> }
            { form === 4 && modal.show && <Modal children={ <ConfirmFormRegister /> } disableClose={blockClose} /> }
            {
                (!loggedIn && !loading) &&
                <>
                    <span className="userbutton" onClick={() => { openForm(1) }}>
                        <span role="img" aria-label="head">👤</span> Log In or Sign Up
                    </span>
                </>
            }
            {
                (loggedIn && !loading) &&
                <>
                    <a className="userbutton" href={UI_ACCOUNT}>
                        <span role="img" aria-label="head">👤</span> {user.username}
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
