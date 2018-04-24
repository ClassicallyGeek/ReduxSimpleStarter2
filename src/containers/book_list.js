import React, { Component } from 'react';
import { connect } from 'react-redux'; // The glue between react and redux

/* A container is a react component that has a direct connection to the state managed by redux
The most parent component that cares about state to do its thing it should be a container */
class BookList extends Component {
  // TODO why isn't there a constructor? I thought all react class components needed one.
  renderList() {
    console.log(this.props.books);
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">
        {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  //Whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  };
}

// Connect takes a function and a component
export default connect(mapStateToProps)(BookList);
