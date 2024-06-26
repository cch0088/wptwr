import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getDateFromString } from '../../lib/validation';
import { renderHTML } from "../../lib/convert";

const NewEventForm = ({
    loading,
    error,
    data,
    loggedIn,
    newEventOpen,
    title,
    content,
    category,
    date,
    duration,
    location,
    setDate,
    setTitle,
    setContent,
    setCategory,
    setDuration,
    setLocation,
    setNewEventOpen,
    handleNewEvent
}) =>
(
    <div className="forum-list-container">
        {newEventOpen
        ?
            <div className="forum-category">Add a new event</div>
        :
            <div className="forum-section">
                <div className="forum-category">
                    {!loading && !error && data && data.posts.nodes.map((post, count) => (
                        <div key={post.postId} className="forum-post">
                            <div className="forum-post-info">Event #{count + 1} created by {post.author.node.name} {getDateFromString(post.date)}</div>
                            <div dangerouslySetInnerHTML={renderHTML(post.content)} />
                        </div>
                    ))}
                </div>
            </div>
        }
        {loggedIn
        ? <> {
                newEventOpen
                ? <>
                    <div id="new-topic-container">
                    <input className="new-topic-title"
                        type="text"
                        name="title"
                        placeholder="Event title"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value); }}
                    />
                    </div>
                    <div id="new-topic-container">
                    <input className="new-topic-title"
                        type="text"
                        name="category"
                        placeholder="Event category"
                        value={category}
                        onChange={(e) => { setCategory(e.target.value); }}
                    />
                    </div>
                    <div id="new-topic-container">
                    <input className="new-topic-title"
                        type="text"
                        name="duration"
                        placeholder="Event duration"
                        value={duration}
                        onChange={(e) => { setDuration(e.target.value); }}
                    />
                    </div>
                    <div id="new-topic-container">
                    <input className="new-topic-title"
                        type="text"
                        name="location"
                        placeholder="Event location"
                        value={location}
                        onChange={(e) => { setLocation(e.target.value); }}
                    />
                    </div>
                    <div id="new-topic-container">
                    <input className="new-topic-title"
                        type="text"
                        name="date"
                        placeholder="Event date"
                        value={date}
                        onChange={(e) => { setDate(e.target.value); }}
                    />
                    </div>
                    <div id="text-editor-container">
                        <ReactQuill
                            theme="snow"
                            value={content}
                            onChange={setContent}
                        />
                    </div>
                    <button className="forum-button"
                        onClick={() => handleNewEvent()}
                        disabled={
                            !title
                            || !category
                            || !duration
                            || !location
                            || !date
                            || !content}>New event
                    </button>
                    <button className="forum-button right-offset" onClick={() => setNewEventOpen(false)}>Cancel</button>
                </>
                :
                <>
                    {!loading && !error && data
                        && (data.posts.nodes.length === 0)
                        && <div className="forum-category">
                        Nothing to show here... Add an event!
                    </div>}
                    <button className="forum-button" onClick={() => setNewEventOpen(true)}>New event</button>
                </>
            }
        </>
        : <div>You must be logged in to create an event.</div>}
    </div>
);

export default NewEventForm;
