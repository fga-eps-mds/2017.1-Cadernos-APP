import { connect } from 'react-redux';
import InspirationList from './inspiration-list.component';
import { asyncGetInspirations, asyncDeleteInspiration } from '../../actions/inspiration-actions'
import { asyncGetInspiration } from '../../actions/single-inspiration-actions'
import { Actions } from 'react-native-router-flux';
import { Toast } from 'native-base'


const mapStateToProps = (state) => {
  return {
    inspirations: state.inspirations,
    primary: state.book,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInspirations(data) {
      dispatch(asyncGetInspirations(data))
    },

    deleteInspiration(data, book_id) {
      console.log("==============================================")
      console.log(book_id)
      callback = (response) => {
        if (response) {
          Toast.show({
            text: 'Relação deletada!',
            position: 'center',
            buttonText: 'Ok!'
          });
        } else {
          Toast.show({
            text: 'Houve um problema ao deletar a inspiração...',
            position: 'center',
            buttonText: 'Ok!'
          });
        }
      }
      dispatch(asyncDeleteInspiration(data, callback, book_id))
    },
    selectInspiration(data) {
      const callback = () => {
        Actions.ViewInspiration();
      }
      dispatch(asyncGetInspiration(data, callback));

    }
  }
}

const InspirationListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InspirationList);

export default InspirationListContainer;