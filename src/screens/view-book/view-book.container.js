import { connect } from 'react-redux';
import ViewBookComponent from './view-book.component';

import { Actions } from 'react-native-router-flux';

import { bookSet, asyncBookDelete } from '../../actions/book-actions';
import { asyncBookListSet } from '../../actions/book-list-actions'
import { asyncSetTasks, setTasks } from '../../actions/tasks-actions';
import { asyncSetCategories } from '../../actions/categories-actions';
import { asyncMembershipGet } from '../../actions/memberships-actions';
import { Toast } from 'native-base'
import { Clipboard } from 'react-native'

import { getBaseUrl } from '../../config/axios';

const mapStateToProps = (state) => {
  return {
    book: state.book,
    user: state.user,
    tasks: state.tasks,
    categories: state.categories,
    isVisitor: state.user.isVisitor,
    sendingData: state.book.sendingData,
    memberships: state.memberships
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedBook(book) {
      dispatch(bookSet(book));
    },

    fetchBookTasks(book) {
      dispatch(asyncSetTasks(book));
    },

    clearTasks() {
      dispatch(setTasks([]));
    },

    fetchCategories() {
      dispatch(asyncSetCategories());
    },

    getMemberships(book) {
      dispatch(asyncMembershipGet(book))
    },

    copiarLink(book){
      Clipboard.setString(`${getBaseUrl()}/books/${book.id}/${book.title}.pdf`)
      Toast.show({
              text: 'Link copiado',
              position: 'center',
              buttonText: 'Ok'
            })
    },

    deleteBook(bookId) {
      const callback = () => {
        Actions.pop();
      }

      dispatch(asyncBookDelete(bookId, callback));
    }
  }
}

const ViewBookContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewBookComponent);

export default ViewBookContainer;
