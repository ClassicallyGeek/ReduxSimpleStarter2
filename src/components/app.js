import React, { Component } from 'react';

import BookList from '../containers/book_list';
import BookDetails from '../containers/book_detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetails />
      </div>
    );
  }
}

/*
 * Actions are essentially broadcasted to all Reducers
 * Action Type is simply the EVENT name
 * Reducers check the Action Type and decide if they want to do something about it
*/
