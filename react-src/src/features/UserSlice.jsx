import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  "id": 0,
  "name": null,
  "url": null,
  "description": null,
  "link": null,
  "slug": null,
  "avatar_urls": {},
  "meta": [],
  "_links": {
    "self": [],
    "collection": []
  }
};

export const forumSlice = createSlice({
    name: 'userDetails',
    initialState: { value: initialStateValue },
    reducers: {
       pushUserDetails: (state, action) => {
        state.value = action.payload;
       },
       purgeUserDetails: (state) => {
        state.value = initialStateValue;
       }
    }
});

export const { pushUserDetails, purgeUserDetails } = userSlice.actions;

export default userSlice.reducer;
