import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    "id": 0,
    "date": null,
    "date_gmt": null,
    "guid": {
        "rendered": null
    },
    "modified": null,
    "modified_gmt": null,
    "slug": null,
    "status": "publish",
    "type": "post",
    "link": null,
    "title": {
        "rendered": null
    },
    "content": {
        "rendered": null,
        "protected": false
    },
    "excerpt": {
        "rendered": null,
        "protected": false
    },
    "author": 0,
    "featured_media": 0,
    "comment_status": null,
    "ping_status": null,
    "sticky": false,
    "template": "",
    "format": "standard",
    "meta": {
        "footnotes": ""
    },
    "categories": [],
    "tags": [],
    "_links": {
        "self": [],
        "collection": [],
        "about": [],
        "author": [],
        "replies": [],
        "version-history": [],
        "predecessor-version": [],
        "wp:attachment": [],
        "wp:term": [],
        "curies": []
    }
}

export const postSlice = createSlice({
    name: 'postContent',
    initialState: { value: initialStateValue },
    reducers: {
       pushForumPostContent: (state, action) => {
        state.value = action.payload;
       },
       purgeForumPostContent: (state) => {
        state.value = initialStateValue;
       }
    }
});

export const { pushForumPostContent, purgeForumPostContent } = postSlice.actions;

export default postSlice.reducer;
