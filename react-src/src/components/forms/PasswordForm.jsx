import React, { useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useMutation, gql } from '@apollo/client';
import { validatePassword } from '../../lib/validation';

function PasswordForm({setForm, key}) {

    const [error, setError] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const RESET_PASSWORD = gql`
        mutation resetUserPassword(
            $key: String!
            $login: String!
            $password: String!
        ) {
            resetUserPassword(
            input: {
                key: $key
                login: $login
                password: $password
            }
            ) {
            user {
                databaseId
            }
            }
        }`;

    const [resetPassword] = useMutation(RESET_PASSWORD);

    function handleSubmit(e) {
        e.preventDefault();

        if (password.length > 0 && username.length > 0 && validatePassword(password, passwordConfirm)) {
            resetPassword({
                variables: {
                  key,
                  login: username,
                  password,
                },
              })
            .then((_status) => setForm(0))
            .catch((_error) => setError('Error resetting password.'));
        } else if (!validatePassword(password, passwordConfirm)) {
            setError('Passwords do not match.');
        } else {
            setError('Check that all fields are filled.');
        }
    }

    return (<form id="site-form">
        <div className="title-label">PASSWORD RESET</div>

        {(error) ? <div className='error-label'>{error}</div> : null}

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

        <div className="label-login">Confirm Password</div>

        <input className="field-login"
            type="password"
            name="password"
            value={password}
            onChange={(e) => { setPasswordConfirm(e.target.value); }}
        />

        <PasswordStrengthBar
            className="password-bar"
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
            name="reset"
            value="Reset Password"
            onClick={(e) => { handleSubmit(e); }}
        />
    </form>)
}

export default PasswordForm;
