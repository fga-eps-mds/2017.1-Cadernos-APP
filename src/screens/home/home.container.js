import { connect } from 'react-redux';
import HomeComponent from './home.component';

import { Actions } from 'react-native-router-flux';

import { asyncBookListSet } from '../../actions/book-list-actions';
import { bookSet } from '../../actions/book-actions';
import { setDrawerData } from '../../actions/drawer-data-actions';

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList,
    isVisitor: state.user.isVisitor,
    drawerData: state.drawerData
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

    setupDrawer() {
      const drawerData = {
        displaySelf: true,
        title: "Meus Cadernos"
      }

      dispatch(setDrawerData(drawerData));
    }
  }
}

const HomeConatiner = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeConatiner;
