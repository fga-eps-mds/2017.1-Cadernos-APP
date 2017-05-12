import { connect } from 'react-redux';
import CreateBookComponent from './create-book.component';

import { asyncBookSet, bookSetErrors } from '../../actions/book-actions';

const mapStateToProps = (state) => {

  console.log('CONTAINER PROPS');
  console.log(state.book);

  return {
    id: state.book.id,
    title: state.book.title,
    loggedUserId: state.user.id,
    sendingData: state.book.sendingData,
    errors: state.book.errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBook(bookData) {
      dispatch(asyncBookSet(bookData));
    },

    clearErrors() {
      dispatch(bookSetErrors({}));
    }
  }
}

const CreateBookContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (CreateBookComponent);

export default CreateBookContainer;
