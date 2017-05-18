import { connect } from 'react-redux';
import CreateActivityComponent from './create-activity.component';

import { asyncBookSet, bookSetErrors, bookSetCreated } from '../../actions/book-actions';

const mapStateToProps = (state) => {
  return {
    id: state.book.id,
    title: state.book.title,
    loggedUserId: state.user.id,
    sendingData: state.book.sendingData,
    errors: state.book.errors,
    created: state.book.created
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBook(bookData) {
      dispatch(asyncBookSet(bookData));
    },

    clearErrors() {
      dispatch(bookSetErrors({}));
      dispatch(bookSetCreated(false));
    }
  }
}

const CreateActivityContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (CreateActivityComponent);

export default CreateActivityContainer;
