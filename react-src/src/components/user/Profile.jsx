import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
const user = useSelector(state => state.user.value);

//TODO: Insert link to delete me plugin

return (
        <div>
            <p>Welcome {user.username}</p>
            <input className="button"
                type="submit"
                name="delete"
                value="Delete Me"
            />
        </div>
    )
}
