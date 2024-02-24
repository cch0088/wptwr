import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { validateEmail } from '../../lib/validation';

function ResetByEmailForm({setForm}) {

    const [message, setMessage] = useState(null);
    const [email, setEmail] = useState('');

    const SEND_PASSWORD_RESET_EMAIL = gql`
        mutation sendPasswordResetEmail($username: String!) {
        sendPasswordResetEmail(
            input: { username: $username }
        ) { user { databaseId } } }`;

    const [sendPasswordResetEmail, { loading }] = useMutation(
        SEND_PASSWORD_RESET_EMAIL
    );

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

        <input className="button"
            type="submit"
            name="send"
            value="Request Reset"
            onClick={(e) => { handleSubmit(e); }}
            disabled={loading}
        />
    </form>)
}

export default ResetByEmailForm;
