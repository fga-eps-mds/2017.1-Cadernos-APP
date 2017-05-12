import initialState from '../config/initial-state';
import { BOOK_SET, BOOK_SET_ERRORS, BOOK_SET_SENDING_DATA, BOOK_SET_CREATED } from '../config/actions-types';

const bookReducer = (state = initialState.book, action) => {
  switch (action.type) {
    case BOOK_SET:
      return {
        ...action.book
      };

    case BOOK_SET_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };

    case BOOK_SET_SENDING_DATA:
      return {
        ...state,
        sendingData: action.sendingData
      };

    case BOOK_SET_CREATED:
      return {
        ...state,
        created: action.created
      };

    default:
      return state;
  }
}

export default bookReducer;