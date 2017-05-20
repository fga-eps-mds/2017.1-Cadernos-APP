import { connect } from 'react-redux';
import ListBooksComponent from './list-books.component';

import { asyncBookListSet } from '../../actions/book-list-actions';
import { bookSet } from '../../actions/book-actions';

import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooks() {
      dispatch(asyncBookListSet());
    },

    viewBook(book) {
      dispatch(bookSet(book));
      Actions.ViewBook();
    },

    goToCreateBook() {
      Actions.CreateBook();
    }
  }
}

const ListBooksContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListBooksComponent);

export default ListBooksContainer;
