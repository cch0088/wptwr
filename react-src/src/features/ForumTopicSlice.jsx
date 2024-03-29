import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];

export const forumTopicSlice = createSlice({
    name: 'forumTopic',
    initialState: { value: initialStateValue },
    reducers: {
       pushForumTopicContent: (state, action) => {
        state.value = action.payload;
       },
       purgeForumTopicContent: (state) => {
        state.value = initialStateValue;
       }
    }
});

export const { pushForumTopicContent, purgeForumTopicContent } = forumTopicSlice.actions;

export default forumTopicSlice.reducer;
