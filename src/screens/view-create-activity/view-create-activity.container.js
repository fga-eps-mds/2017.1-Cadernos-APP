import { connect } from 'react-redux';
import ViewCreateActivityComponent from './view-create-activity.component';

import { bookSet } from '../../actions/book-actions';

const mapStateToProps = (state) => {
  return {
    title: state.book.title
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedBook(book) {
      dispatch(bookSet(book));
    }
  }
}

const ViewCreateActivityComponent = connect(
  mapStateToProps,
  mapDispatchToProps
) (ViewCreateActivityComponent);

export default ViewCreateActivityComponent;