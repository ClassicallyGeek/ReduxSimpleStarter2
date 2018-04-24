/* Reducers produce the value of our state. */
import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  // will add a key 'books' to our global app state.
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;
