import React from "react";
import { UI_ACCOUNT_DELETE } from "../../config";
import useAuth from "../../hooks/useAuth";

export default function Profile() {

const {user, loggedIn} = useAuth();

return (
    <>
        {loggedIn &&
            <div className="slide">
                <p>Welcome {user.username}</p>
                <a href={UI_ACCOUNT_DELETE}>Delete my account...</a>
            </div>
        }
    </>
    )
}
