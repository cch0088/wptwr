import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  "__typename": "User",
  "id": null,
  "databaseId": 0,
  "username": null,
  "firstName": null,
  "lastName": null,
  "email": null,
  "capabilities": []
};

export const userSlice = createSlice({
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
