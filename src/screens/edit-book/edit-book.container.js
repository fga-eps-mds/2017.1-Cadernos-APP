import { connect } from 'react-redux';
import EditBookComponent from './edit-book.component';

import { bookSet } from '../../actions/book-actions';

const mapStateToProps = (state) => {
  return {
    book: state.book
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
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