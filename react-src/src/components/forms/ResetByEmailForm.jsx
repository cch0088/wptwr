import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { validateEmail } from '../../lib/validation';
import { SEND_PASSWORD_RESET_EMAIL } from '../../gql';

function ResetByEmailForm({setForm}) {

    const [message, setMessage] = useState(null);
    const [email, setEmail] = useState('');
    const [isHuman, setIsHuman] = useState(false);

    const [sendPasswordResetEmail, { loading }] = useMutation(SEND_PASSWORD_RESET_EMAIL);

    function handleSubmit(e) {
        e.preventDefault();

        if (validateEmail(email)) {
            sendPasswordResetEmail({
                variables: {
                  username: email,
                }
            })
            .then((_status) => setForm(0))
            .catch((_error) => setMessage('E-mail could not be sent.'));
        } else if (!validateEmail(email)) {
            setMessage('Invalid e-mail provided.');
        } else {
            setMessage('Check that all fields are filled.');
        }
    }

    return (<form id="site-form">
        <div className="title-label">PASSWORD RESET</div>

        {(message) ? <div className='error-label'>{message}</div> : null}

        <div className="label-login">E-mail</div>

        <input className="field-login" 
            type="email"
            name="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); }}
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
            name="send"
            value="Request"
            onClick={(e) => { handleSubmit(e); }}
            disabled={!isHuman || loading}
        />
    </form>)
}

export default ResetByEmailForm;
