import React, { Component } from 'react';
import { connect } from 'react-redux'; // The glue between react and redux
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

/* A container is a react component that has a direct connection to the state managed by redux
The most parent component that cares about state to do its thing it should be a container */
class BookList extends Component {
  // TODO why isn't there a constructor? I thought all react class components needed one.
  renderList() {
    console.log(this.props.books);
    return this.props.books.map((book) => {
      return (
        <li onClick={ () => this.props.selectBook(book)} 
          key={book.title}
          className="list-group-item">
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

// Anything returned from this function will end up as props on the BookList Container.
// So we cna call this.props.selectBook (like a callback).
function mapDispatchToProps(dispatch) {
  // whenever select book is called, the result should be passed to our reducers.
  // dispatch takes action creators and spits actions into all the reducers.
    return bindActionCreators( { selectBook }, dispatch );
}

/* Promote booklist from component to container it needs to know about
 * dispatch method select book- make available as a prop
 * Connect takes a function and a component */
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
