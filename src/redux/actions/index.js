import { GET_BOOKS, GET_ONE_BOOK } from "../types";
import axios from "axios";

export function getBooks() {
  return async function (dispatch) {
    const books = await axios.get(
      "https://www.anapioficeandfire.com/api/books"
    );

    return dispatch({
      type: GET_BOOKS,
      payload: books.data,
    });
  };
}

/*export const getOneBook = (id) => {};*/
