import {connect} from 'react-redux';
import ViewTask from './view-task.component';
import { Actions } from 'react-native-router-flux';

import {asyncTaskDelete} from '../../actions/tasks-actions';

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask(task) {
      const callBack = () => {
        Actions.pop();
      }

      dispatch(asyncTaskDelete(task, callBack));
    }
  }
}

const ViewTaskContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewTask);

export default ViewTaskContainer;
