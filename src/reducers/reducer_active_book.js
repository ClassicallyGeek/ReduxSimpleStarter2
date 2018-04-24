/*
 * State Arguement is not application state. Only the state this reducer is
 * Responsible for.
 * It'll be the "old value" or "current value" before something changes.

 * state = null is giving a default value. You cannot be returning an undefined
 * from a reducer. */
export default function (state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload; // Always return a fresh object. No mutating state.
  }
  return state;
}
