/* Reducers produce the value of our state. */
import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  // will add a key 'books' to our global app state.
    books: BooksReducer
});

export default rootReducer;
