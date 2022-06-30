import { combineReducers } from "redux";
import { booksReducer } from "./books/books-reducer";
import { controlsReducer } from "./controls/controls-reducer";

export const rootReducer = combineReducers({
  books: booksReducer,
  controls: controlsReducer,
});
