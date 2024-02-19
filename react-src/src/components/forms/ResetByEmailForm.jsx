import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { validateEmail } from '../../lib/validation';

function ResetByEmailForm({setForm}) {

    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');

    const SEND_PASSWORD_RESET_EMAIL = gql`
        mutation sendPasswordResetEmail($username: String!) {
        sendPasswordResetEmail(
            input: { username: $username }
        ) { user { databaseId } } }`;

    const [sendPasswordResetEmail] = useMutation(
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
            .catch((_error) => setError('E-mail could not be sent.'));
        } else if (!validateEmail(email)) {
            setError('Invalid e-mail provided.');
        } else {
            setError('Check that all fields are filled.');
        }
    }

    return (<form id="site-form">
        <div className="title-label">PASSWORD RESET</div>

        {(error) ? <div className='error-label'>{error}</div> : null}

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
        />
    </form>)
}

export default ResetByEmailForm;
