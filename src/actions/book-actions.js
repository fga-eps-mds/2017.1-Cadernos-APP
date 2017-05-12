import { BOOK_SET, BOOK_SET_ERRORS, BOOK_SET_SENDING_DATA } from '../config/actions-types';
import axios, { setAuthorizationToken } from '../config/axios';

import initialState from '../config/initial-state';

export const bookSet = (bookData) => {
  return {
    type: BOOK_SET,
    book: {
      id: bookData.id,
      title: bookData.title,
      userId: bookData.userId,
      sendingData: initialState.book.sendingData,
      errors: initialState.book.sendingData
    }
  }
}

export const bookSetErrors = (errors) => {
  return {
    type: BOOK_SET_ERRORS,
    errors
  }
}

export const bookSetSendingData = (sendingData) => {
  return {
    type: BOOK_SET_SENDING_DATA,
    sendingData
  }
}

export const asyncBookSet = (bookData) => {
  return (dispatch) => {
    dispatch(bookSetSendingData(true));

    axios.post('/books', {
      title: bookData.title,
      user_id: bookData.loggedUserId
    })
    .then(response => {
      if (response.data && response.data.id) {
        dispatch(bookSet({
          id: response.data.id,
          title: response.data.title,
          userId: response.data.user_id
        }));

        dispatch(bookSetErrors({}));
      }
    })
    .catch(err => {
      if (err.response && err.response.status === 422) {
        dispatch(bookSetErrors(err.response.data));
      }
    })
    .finally(() => {
      // to when the user try to create another book,
      // the screen won't open with a loading on the send button
      dispatch(bookSetSendingData(false));
    });
  }
}