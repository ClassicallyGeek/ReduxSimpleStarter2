/* Reducers produce the value of our state. */
import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
    books: BooksReducer
});

export default rootReducer;
