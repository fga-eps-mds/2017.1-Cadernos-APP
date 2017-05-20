import update from 'immutability-helper';

import initialState from '../config/initial-state';
import { BOOK_LIST_SET, BOOK_LIST_SET_SENDING_DATA, BOOK_LIST_ADD_BOOK } from '../config/actions-types';

const bookListReducer = (state = initialState.bookList, action) => {
  switch (action.type) {
    case BOOK_LIST_SET:
      return {
        ...action.bookList
      };

    case BOOK_LIST_SET_SENDING_DATA:
      return {
        ...state,
        sendingData: action.sendingData,
      };

    case BOOK_LIST_ADD_BOOK:
      return update(state, {
        books: {$push: [action.book]}
      });

    default:
      return state;
  }
}

export default bookListReducer;