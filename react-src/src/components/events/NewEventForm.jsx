import React from "react";
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
import { getDateFromString } from '../../lib/validation';
import { renderHTML } from "../../lib/convert";

// Fields for creating new event:
// Title
// Description
// Category
// Date
// Duration
// Location

const NewEventForm = ({
    loading,
    error,
    data,
    loggedIn,
    user
}) =>
(
    <div className="forum-list-container">
        <div className="forum-section">
            <div className="forum-category">
                {!loading && !error && data.posts.nodes.map((post, count) => (
                    <div key={post.postId} className="forum-post">
                        <div className="forum-post-info">Event #{count + 1} created by {post.author.node.name} {getDateFromString(post.date)}</div>
                        <div dangerouslySetInnerHTML={renderHTML(post.content)} />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default NewEventForm;
