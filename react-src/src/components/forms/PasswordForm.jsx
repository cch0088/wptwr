import React, { useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useMutation, gql } from '@apollo/client';
import { getRoot, validatePassword } from '../../lib/validation';
import { useNavigate } from 'react-router-dom';
import { WP_ROOT } from '../../config';

function PasswordForm({pkey, login}) {
    const navigate = useNavigate();

    const [message, setMessage] = useState(null);
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

        if (password.length > 0 && validatePassword(password, passwordConfirm)) {
            resetPassword({
                variables: {
                  key: pkey,
                  login,
                  password,
                },
              })
            .then((_status) => navigate(getRoot(WP_ROOT)))
            .catch((_error) => setMessage('Error resetting password.'));
        } else if (!validatePassword(password, passwordConfirm)) {
            setMessage('Passwords do not match.');
        } else {
            setMessage('Check that all fields are filled.');
        }
    }

    return (<form id="site-form">
        <div className="title-label">PASSWORD RESET</div>

        {(message) ? <div className='error-label'>{message}</div> : null}

        <div className="label-login">New password for {login}</div>

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
            value={passwordConfirm}
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
            value="Reset"
            onClick={(e) => { handleSubmit(e); }}
        />

        <span className="link-label" onClick={() => { navigate(getRoot(WP_ROOT)) }}>Cancel</span>
    </form>)
}

export default PasswordForm;
