import { connect } from 'react-redux'
import Sketch from './sketch.component'
import { imageUrlSet } from '../../actions/single-task-actions';
import { Actions } from 'react-native-router-flux';
import { asyncSetSingleTask, clearSingleTask } from '../../actions/single-task-actions';

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setImage(image_url){
      dispatch(imageUrlSet(image_url));
      Actions.pop({base64: image_url});
  }
  }
}

const SketchContainer = connect(mapStateToProps, mapDispatchToProps)(Sketch);
export default SketchContainer;