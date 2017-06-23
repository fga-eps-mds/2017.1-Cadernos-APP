import { connect } from 'react-redux'
import Sketch from './sketch.component'
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';
import { asyncSetSingleTask, clearSingleTask, asyncUpdateTaskDraw, imageUrlSet } from '../../actions/single-task-actions';

const mapStateToProps = (state) => {
  return {
    task: state.singleTask
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
      Alert.alert('Inserir sketch?',
        'Ao inserir o sketch, a imagem atual será substituída',
        [
          { text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          {
            text: 'OK', onPress: () => {
              dispatch(asyncUpdateTaskDraw(data));
              Actions.pop();
            }
          }
        ]
      );
      //dispatch(imageUrlSet(image_url));

    }
  }
}

const SketchContainer = connect(mapStateToProps, mapDispatchToProps)(Sketch);
export default SketchContainer;