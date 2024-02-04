import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/ModalSlice';
import { logout } from '../features/UserSlice';
import { logoutService } from '../features/UserServices';
import { endSession } from '../features/SessionSlice';
import Modal from './Modal';
import LoginForm from './forms/LoginForm';

function UserControl() {

    const user = useSelector(state => state.user.value);
    const modal = useSelector(state => state.modal.value);

    const history = useNavigate();
    const dispatch = useDispatch();

    function handleLogout() {
        logoutService(user.logout_token, user.csrf_token)
        .then(resp => {
            console.log(resp.message);
            dispatch(logout());
            dispatch(endSession());
        });
    }

    function handleLogin() {
        dispatch(openModal());
    }

return (
        <div id="usercontrol">
            { modal.show && <Modal children={ <LoginForm /> }/> }
            {
                (user.current_user.name === '') ?
                <>
                    <span className="userbutton" onClick={() => { history.push("/register") }}>
                        <span role="img" aria-label="new">🆕</span> Sign Up
                    </span>
                    <span className="userbutton" onClick={handleLogin}>
                        <span role="img" aria-label="head">👤</span> Log In
                    </span>
                </> :
                <>
                    <span className="userbutton" onClick={() => { history.push("/account") }}>
                        <span role="img" aria-label="head">👤</span> Account
                    </span>
                    <span className="userbutton" onClick={handleLogout}>
                        <span role="img" aria-label="door">🚪</span> Log Out
                    </span>
                </>
            }
        </div>
    )
}
export default UserControl;
