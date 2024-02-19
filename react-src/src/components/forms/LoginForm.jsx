import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation, gql } from '@apollo/client';
import { GET_USER } from '../../hooks/useAuth';
import { closeModal } from '../../features/ModalSlice';

function LoginForm({setForm}) {

    const dispatch = useDispatch();

    const [message, setMessage] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const LOG_IN = gql`
        mutation logIn($login: String!, $password: String!) {
        loginWithCookies(input: { login: $login password: $password })
        { status } }`;

    const [logIn, { loading, error }] = useMutation(LOG_IN, {
        refetchQueries: [
        { query: GET_USER }
        ],
    });

    function handleLogin(e) {
        e.preventDefault();

        if (username.length > 0 && password.length > 0) {
            logIn({
            variables: {
                login: username,
                password,
            }
            })
            .then((_status) => dispatch(closeModal()))
            .catch((_error) => setMessage('Invalid username or password!'));
        } else {
            setMessage('Missing username or password.');
        }
    }

return (<form id="site-form">
        <div className="title-label">SIGN IN</div>

        {(message) ? <div className='error-label'>{message}</div> : null}

        <div className="label-login">Username</div>

        <input className="field-login"
            type="text"
            name="username"
            value={username}
            onChange={(e) => { setUsername(e.target.value); }}
        />

        <div className="label-login">Password</div>

        <input className="field-login"
            type="password"
            name="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); }}
        />

        <span className="link-label" onClick={() => { setForm(3) }}>Forgot Password</span>

        <input className="button"
            type="submit"
            name="login"
            value="Sign In"
            onClick={(e) => { handleLogin(e); }}
        />

        <span className="link-label" onClick={() => { setForm(2) }}>Create Account</span>
    </form>)
}

export default LoginForm;
