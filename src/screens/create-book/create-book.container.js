import { connect } from 'react-redux';
import CreateBookComponent from './create-book.component';

import { asyncBookSet, bookSetErrors, bookSetCreated, bookSet } from '../../actions/book-actions';
import { bookListAddBook } from '../../actions/book-list-actions';

import initialState from '../../config/initial-state';

import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => {
  return {
    book: state.book,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBook(bookData) {
      const callback = (book) => {
        dispatch(bookListAddBook(book));
        Actions.ViewBook();
      }

      dispatch(asyncBookSet(bookData, callback));
    },

    clearErrors() {
      dispatch(bookSetErrors({}));
      dispatch(bookSetCreated(false));
    },

    clearSelectedBook() {
      dispatch(bookSet(initialState.book));
    }
  }
}

const CreateBookContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (CreateBookComponent);

export default CreateBookContainer;
