import { connect } from 'react-redux';
import ViewBookComponent from './view-book.component';

import { bookSet } from '../../actions/book-actions';
import { asyncSetTasks } from '../../actions/tasks-actions';
import { asyncSetCategories } from '../../actions/categories-actions';

const mapStateToProps = (state) => {
  return {
    book: state.book,
    user: state.user,
    tasks: state.tasks,
    categories: state.categories,
    isVisitor: state.user.isVisitor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedBook(book) {
      dispatch(bookSet(book));
    },

    fetchBookTasks(book) {
      dispatch(asyncSetTasks(book));
    },

    fetchCategories() {
      dispatch(asyncSetCategories());
    }
  }
}

const ViewBookContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (ViewBookComponent);

export default ViewBookContainer;