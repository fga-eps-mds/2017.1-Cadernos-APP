import { connect } from 'react-redux'
import Sketch from './sketch.component'
import { Actions } from 'react-native-router-flux';
import { asyncSetSingleTask, clearSingleTask, asyncUpdateTaskDraw, imageUrlSet } from '../../actions/single-task-actions';

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setImage(image_url, taskId) {
      console.log("task id de props: " + taskId);
      const data = {
        id: taskId,
        imageBase64: `data:image/png;base64,${image_url}`
      };

      //dispatch(imageUrlSet(image_url));
      dispatch(asyncUpdateTaskDraw(data));
      Actions.pop();
    }
  }
}

const SketchContainer = connect(mapStateToProps, mapDispatchToProps)(Sketch);
export default SketchContainer;