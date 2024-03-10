import { createSlice } from "@reduxjs/toolkit";

const closedState = { categoryId: null, categoryName: null };

export const categorySlice = createSlice({
    name: 'category',
    initialState: { value: closedState },
    reducers: {
       setCategory: (state, action) => {
        state.value = action.payload;
       },
       purgeCategory: (state) => {
        state.value = closedState;
       }
    }
});

export const { setCategory, purgeCategory } = categorySlice.actions;

export default categorySlice.reducer;
