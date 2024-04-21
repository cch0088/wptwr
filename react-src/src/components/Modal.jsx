import React from 'react';

import { closeModal } from '../features/ModalSlice';
import { useDispatch } from 'react-redux';

export default function Modal({children, disableClose})
{
    const dispatch = useDispatch();

    const handleClose = (e) => {
        if (e.target.className === "modal-bg" && !disableClose) { dispatch(closeModal()) }
    };

    return (
        <div className="modal-bg" onClick={(e) => handleClose(e)}>
            <section className="modal-main">
                {children}
            </section>
        </div>);
};
