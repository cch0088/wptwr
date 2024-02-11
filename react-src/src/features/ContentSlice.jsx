import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    "id": 0,
    "date": null,
    "date_gmt": null,
    "guid": {
        "rendered": ""
    },
    "modified": null,
    "modified_gmt": null,
    "slug": null,
    "status": null,
    "type": null,
    "link": null,
    "title": {
        "rendered": ""
    },
    "content": {
        "rendered": "",
        "protected": false
    },
    "excerpt": {
        "rendered": "",
        "protected": false
    },
    "author": 0,
    "featured_media": 0,
    "parent": 0,
    "menu_order": 0,
    "comment_status": "closed",
    "ping_status": "closed",
    "template": "",
    "meta": {
        "footnotes": ""
    },
    "_links": {
        "self": [],
        "collection": [],
        "about": [],
        "author": [],
        "replies": [],
        "version-history": [],
        "predecessor-version": [],
        "wp:attachment": [],
        "curies": []
    }
};

export const contentSlice = createSlice({
    name: 'content',
    initialState: { value: initialStateValue },
    reducers: {
       pushContent: (state, action) => {
        state.value = action.payload;
       },
       purgeContent: (state) => {
        state.value = initialStateValue;
       } 
    }
});

export const { pushContent, purgeContent } = contentSlice.actions;

export default contentSlice.reducer;
