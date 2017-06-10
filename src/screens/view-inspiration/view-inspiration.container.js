import { connect } from 'react-redux';
import ViewInspirationComponent from './view-inspiration.component';

import { Actions } from 'react-native-router-flux';

import { bookSet, asyncBookDelete } from '../../actions/book-actions';
import { asyncBookListSet } from '../../actions/book-list-actions'
import { asyncSetTasks } from '../../actions/tasks-actions';
import { asyncSetCategories } from '../../actions/categories-actions';

const mapStateToProps = (state) => {
  return {
    inspiration: state.inspiration,
    user: state.user,
    tasks: state.tasks,
    categories: state.categories,
    isVisitor: state.user.isVisitor,
    sendingData: state.book.sendingData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInspirationTasks(inspiration) {
      dispatch(asyncSetTasks(inspiration));
    },

    fetchCategories() {
      dispatch(asyncSetCategories());
    }
  }
}

const ViewInspirationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewInspirationComponent);

export default ViewInspirationContainer;
