import { connect } from 'react-redux';
import ListBooksComponent from './list-books.component';

import { asyncBookListSet } from '../../actions/book-list-actions';

const mapStateToProps = (state) => {
  console.log(state.user);

  return {
    books: state.bookList.books,
    sendingData: state.bookList.sendingData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooks() {
      dispatch(asyncBookListSet());
    }
  }
}

const ListBooksContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListBooksComponent);

export default ListBooksContainer;
