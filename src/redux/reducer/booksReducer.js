import { GET_BOOKS, GET_ONE_BOOK } from "../types";

const initialState = {
  allBooks: [],
  currentBook: null,
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        allBooks: action.payload,
      };
    case GET_ONE_BOOK:
      return {
        ...state,
        currentBook: action.payload
      };
    default:
      return state;
  }
}
