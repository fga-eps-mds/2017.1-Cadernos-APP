import { connect } from 'react-redux';
import InspirationList from './inspiration-list.component';

import { Actions } from 'react-native-router-flux';



const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const InspirationListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InspirationList);

export default InspirationListContainer;