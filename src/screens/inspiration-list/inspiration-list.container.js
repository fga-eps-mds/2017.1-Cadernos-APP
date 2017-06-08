import { connect } from 'react-redux';
import InspirationList from './inspiration-list.component';
import { asyncGetInspirations } from '../../actions/inspiration-actions'
import { Actions } from 'react-native-router-flux';



const mapStateToProps = (state) => {
  return {
    inspirations: state.inspirations,
    primary: state.book
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInspirations(data) {
      dispatch(asyncGetInspirations(data))
    }
  }
}

const InspirationListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InspirationList);

export default InspirationListContainer;