import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [],
    currentBook: null
}

export const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {

    }
});

export const {} = bookSlice.actions;
export default bookSlice.reducer;