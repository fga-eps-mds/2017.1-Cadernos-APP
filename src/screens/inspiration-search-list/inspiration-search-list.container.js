import { connect } from 'react-redux';
import InspirationSearchList from './inspiration-search-list.component';

import { Actions } from 'react-native-router-flux';

import { asyncBookListSet } from '../../actions/book-list-actions';
import { bookSet } from '../../actions/book-actions';

import { asyncSetInspiration } from '../../actions/inspiration-actions'

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList,
    isVisitor: state.user.isVisitor,
    primary: state.book
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooks() {
      dispatch(asyncBookListSet());
    },

    viewBook(book) {
      dispatch(bookSet(book));
      Actions.ViewBook();
    },
    addInspiration(data) {
      //console.log(data)
      dispatch(asyncSetInspiration(data))
    }
  }
}

const InspirationSearchListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InspirationSearchList);

export default InspirationSearchListContainer;
