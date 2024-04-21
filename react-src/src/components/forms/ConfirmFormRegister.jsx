import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ConfirmFormRegister() {

    const navigate = useNavigate();

    return (<form id="site-form">
    <div className="label-login">Registration confirmation was sent to your e-mail. Click OK to be logged in with your new account.</div>

    <input className="button"
        type="button"
        name="ok"
        value="OK"
        onClick={() => { navigate(0) }}
    />
    </form>)
}
