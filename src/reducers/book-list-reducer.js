import initialState from '../config/initial-state';
import { BOOK_LIST_SET, BOOK_LIST_SET_SENDING_DATA } from '../config/actions-types';

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

    default:
      return state;
  }
}

export default bookListReducer;