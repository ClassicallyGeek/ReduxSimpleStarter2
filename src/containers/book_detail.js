import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetails extends Component {

  render() {
    if(!this.props.activeBook) {
      return <div>Select a Book to get started.</div>;
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: { this.props.activeBook.title }</div>
        <div>Pages: { this.props.activeBook.pages }</div>
      </div>
    );
  }
}

/* Takes application state and returns an object to be given to the BookDetails as props.
*/
function mapStateToProps(state) {
  return {
    activeBook: state.activeBook // TODO he called this book
  }
}

export default connect(mapStateToProps)(BookDetails);
