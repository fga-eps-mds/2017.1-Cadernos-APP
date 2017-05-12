import { connect } from 'react-redux';
import CreateBookComponent from './create-book.component';

const mapStateToProps = (state) => {
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
      // send ajax
    }
  }
}

const CreateBookContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (CreateBookComponent);

export default CreateBookContainer;
