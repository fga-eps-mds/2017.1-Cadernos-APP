import { connect } from 'react-redux';
import ViewInspirationComponent from './view-inspiration.component';

import { Actions } from 'react-native-router-flux';

import { bookSet, asyncBookDelete } from '../../actions/book-actions';
import { asyncBookListSet } from '../../actions/book-list-actions'
import { asyncSetInspirationsTasks } from '../../actions/single-inspiration-tasks-actions';
import { asyncSetCategories } from '../../actions/categories-actions';

const mapStateToProps = (state) => {
  return {
    inspiration: state.inspiration,
    user: state.user,
    inspirationTasks: state.inspirationTasks,
    categories: state.categories,
    isVisitor: state.user.isVisitor,
    sendingData: state.book.sendingData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInspirationTasks(inspiration) {
      dispatch(asyncSetInspirationsTasks(inspiration));
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
