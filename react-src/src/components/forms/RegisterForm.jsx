import React, { useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useDispatch } from 'react-redux';
import { useMutation, gql } from '@apollo/client';
import { closeModal } from '../../features/ModalSlice';

function RegisterForm() {

    const dispatch = useDispatch();

    const [error, setError] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const REGISTER_USER = gql`
        mutation registerUser(
            $username: String!
            $email: String!
            $password: String!
        ) {
            registerUser(
                input: {
                username: $username
                email: $email
                password: $password
                }
            ) { user { databaseId } }
        }`;

    const [register] = useMutation(REGISTER_USER);

    function handleSubmit(e) {
        e.preventDefault();

        if (username.length > 0 && password.length > 0 && email.length > 0) {
            register({
            variables: {
                username,
                email,
                password
            }
            })
            .then((_status) => confirmRegistration())
            .catch((_error) => setError('Error registering. Email or username already taken or incorrect.'));
        } else {
            setError('Check that all fields are filled.')
        }
    }

    function confirmRegistration() {
        return (<div id="site-form">
            <div className="label-login">Check your e-mail to confirm registration.</div>

            <input className="button"
                type="button"
                name="ok"
                value="OK"
                onClick={() => { dispatch(closeModal()) }}
        />
        </div>)
    }

return (<form id="site-form">
        <div className="title-label">SIGN UP</div>

        {(error) ? <div className='error-label'>{error}</div> : null}
        
        <div className="label-login">Username</div>
        
        <input className="field-login" 
            type="text"
            name="username"
            value={username}
            onChange={(e) => { setUsername(e.target.value); }}
        />

        <div className="label-login">E-mail</div>
        
        <input className="field-login" 
            type="text"
            name="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); }}
        />

        <div className="label-login">Password</div>

        <input className="field-login"
            type="password"
            name="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); }}
        />

        <PasswordStrengthBar
            password={password}
            scoreWords={[
                'Weak',
                'Acceptable',
                'Good',
                'Strong',
                'Excellent'
            ]}
            shortScoreWord='Weak'
        />

        <input className="button"
            type="submit"
            name="login"
            value="Sign In"
            onClick={(e) => { handleSubmit(e); }}
        />
    </form>)
}

export default RegisterForm;
