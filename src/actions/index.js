/* An action creator that returns an actions
 * An action is an object with a type and 'payload' */
export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
