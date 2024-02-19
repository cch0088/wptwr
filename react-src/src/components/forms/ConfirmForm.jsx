import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../features/ModalSlice';

function ConfirmForm() {

    const dispatch = useDispatch();

    return (<form id="site-form">
    <div className="label-login">Please check your e-mail for next steps.</div>

    <input className="button"
        type="button"
        name="ok"
        value="OK"
        onClick={() => { dispatch(closeModal()) }}
    />
    </form>)
}

export default ConfirmForm;
