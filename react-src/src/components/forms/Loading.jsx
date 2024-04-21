import React from 'react';
import { BarLoader } from 'react-spinners';

export default function Loading() {
    return (
        <form id="site-form">
            <div className="label-login">Sending E-mail...</div>
            <BarLoader color="#52bfd9" />
        </form>
    );
}
