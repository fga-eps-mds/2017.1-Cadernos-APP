import {
  BOOK_SET,
  BOOK_SET_ERRORS,
  BOOK_SET_SENDING_DATA,
  BOOK_SET_CREATED,
  BOOK_SET_EDITED
} from '../config/actions-types';

import axios, { getBaseUrl } from '../config/axios';

import initialState from '../config/initial-state';


import {
  navigate
} from 'react-navigation';


export const bookSet = ({
  id, title, userId, cover,
  sendingData = initialState.book.sendingData,
  errors = initialState.book.errors,
  created = initialState.book.created,
  edited = initialState.book.edited
}) => {
  return {
    type: BOOK_SET,
    book: {
      id,
      title,
      userId,
      sendingData,
      errors,
      created,
<<<<<<< HEAD
      cover
=======
      edited
>>>>>>> editBook
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

export const bookSetCreated = (created) => {
  return {
    type: BOOK_SET_CREATED,
    created
  }
}

export const bookSetEdited = (edited) => {
  return {
    type: BOOK_SET_EDITED,
    edited
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
          userId: response.data.user_id,
          cover: `${getBaseUrl()}${response.data.cover}`,
          created: true,
          errors: {},
          sendingData: false
        }));
      }
    })
    .catch(err => {
      if (err.response && err.response.status === 422) {
        dispatch(bookSetErrors(err.response.data));
      }

      console.log('ERROR while editing book');
      console.log(err);

      // to when the user try to create another book,
      // the screen won't open with a loading on the send button
      dispatch(bookSetSendingData(false));
    });
  }
}

export const asyncEditBookSet = (bookData) => {
  return (dispatch) => {
    dispatch(bookSetSendingData(true));

    axios.patch(`/books/${bookData.bookId}`, {
      title: bookData.title,
      user_id: bookData.loggedUserId
    })
    .then(response => {
        dispatch(bookSetEdited(true));
        dispatch(bookSet({...response}));

    })
    .catch(err => {
      if (err.response && err.response.status === 422) {
        dispatch(bookSetErrors(err.response.data));
      }

      console.log('ERROR while creating book');
      console.log(err);

      // to when the user try to create another book,
      // the screen won't open with a loading on the send button
      dispatch(bookSetSendingData(false));
    });
  }
}
