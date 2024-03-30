import React, { useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useMutation } from '@apollo/client';
import { validateEmail } from '../../lib/validation';
import { REGISTER_USER } from '../../gql';

function RegisterForm({setForm}) {

    const [message, setMessage] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isHuman, setIsHuman] = useState(false);
    const [email, setEmail] = useState('');

    const [register, { loading }] = useMutation(REGISTER_USER);

    function handleSubmit(e) {
        e.preventDefault();

        if (isHuman && username.length > 0 && password.length > 0 && validateEmail(email)) {
            register({
            variables: {
                username,
                email,
                password
            }
            })
            .then((_status) => setForm(0))
            .catch((_error) => setMessage('Username or e-mail already taken.'));
        } else if (!validateEmail(email)) {
            setMessage('Invalid e-mail provided.');
        } else {
            setMessage('Check that all fields are filled.');
        }
    }

return (<form id="site-form">
        <div className="title-label">SIGN UP</div>

        {(message) ? <div className='error-label'>{message}</div> : null}

        <div className="label-login">Username</div>

        <input className="field-login" 
            type="text"
            name="username"
            value={username}
            onChange={(e) => { setUsername(e.target.value); }}
        />

        <div className="label-login">E-mail</div>

        <input className="field-login" 
            type="email"
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

        <div className="label-login">I'm not a bot</div>

        <input className="human-check"
            type="checkbox"
            name="human"
            value="human"
            onChange={(e) => setIsHuman(e.target.checked)}
        />

        <input className="button"
            type="submit"
            name="register"
            value="Sign Up"
            disabled={!isHuman || loading}
            onClick={(e) => { handleSubmit(e); }}
        />
    </form>)
}

export default RegisterForm;
