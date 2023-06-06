import { combineReducers } from "redux";
import booksReducer from "./booksReducer";

const reducer = combineReducers({
  books: booksReducer,
});

export default reducer;
