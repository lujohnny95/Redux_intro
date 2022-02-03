import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = "";

export const themeSlice = createSlice({
    name: "theme",
    initialState: { value: initialStateValues },
    reducers: {
        changeColour: (state, action) => {
            state.value = action.payload;
        },
    }, 
});

export const { changeColour } = themeSlice.actions;

export default themeSlice.reducer;
