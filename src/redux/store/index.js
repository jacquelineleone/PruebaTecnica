import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../reducer/index";

export const store = configureStore({
    reducer: {
        book: bookReducer
    }
})