import React, { useEffect, useState } from "react";
import { WP_ROOT } from "../config";
import { useNavigate } from "react-router-dom";
import { getRoot } from "../lib/validation";
import Modal from "./Modal";
import PasswordForm from "./forms/PasswordForm";

export default function PasswordReset({currentUrl}) {
    const navigate = useNavigate();

    const [key, setKey] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        if (currentUrl && currentUrl.includes('set-password')) {
            const searchUrl = new URLSearchParams(currentUrl);
            const values = [];
            searchUrl.forEach((x) => values.push(x));
            setKey(values[0]);
            setUser(values[1]);
        } else {
            navigate(getRoot(WP_ROOT));
        }
    },[currentUrl, navigate]);

    return (
            <Modal children={ <PasswordForm pkey={key} login={user} /> } />
        )
}
