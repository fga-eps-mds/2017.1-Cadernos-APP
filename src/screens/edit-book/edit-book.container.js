import { connect } from 'react-redux';
import EditBookComponent from './edit-book.component';

import { bookListUpdateBook } from '../../actions/book-list-actions';
import { bookSet, asyncEditBookSet, bookSetErrors } from '../../actions/book-actions';

import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => {
  return {
    book: state.book
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editBook(bookData) {
      const callback = (editedBook) => {
        console.log('Book was edited');
        console.log(editedBook);

        dispatch(bookListUpdateBook(editedBook));
        dispatch(bookSet({
          ...editedBook,
          userId: editedBook.user_id
        }));

        Actions.pop(); // Go back to ViewBook
      }

      // Callback is called after the book is successful updated on the API
      dispatch(asyncEditBookSet(bookData, callback));
    },

    clearErrors() {
      dispatch(bookSetErrors({}));
      dispatch(bookSetEdited(false));
    },

    setSelectedBook(book) {
      dispatch(bookSet(book));
    }
  }
}

const EditBookContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (EditBookComponent);

export default EditBookContainer;