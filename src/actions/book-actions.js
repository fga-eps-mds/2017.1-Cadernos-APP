import {
  BOOK_SET,
  BOOK_SET_ERRORS,
  BOOK_SET_SENDING_DATA,
  BOOK_SET_CREATED,
  BOOK_SET_EDITED
} from '../config/actions-types';

import axios, { getBaseUrl } from '../config/axios';

import initialState from '../config/initial-state';


export const bookSet = ({
  id, title, userId, coverOriginal, coverMedium, coverThumb,
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
      coverOriginal,
      coverMedium,
      coverThumb,
      edited
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


export const asyncBookSet = (bookData, callback) => {
  return (dispatch) => {
    dispatch(bookSetSendingData(true));

    axios.post('/books', {
      title: bookData.title,
      user_id: bookData.loggedUserId
    })
    .then(response => {
      if (response.data && response.data.id) {
        const book = {
          id: response.data.id,
          title: response.data.title,
          userId: response.data.user_id,
          coverOriginal: `${getBaseUrl()}${response.data.cover_originalr}`,
          coverMedium: `${getBaseUrl()}${response.data.cover_medium}`,
          coverThumb: `${getBaseUrl()}${response.data.cover_thumb}`,
          created: true,
          errors: {},
          sendingData: false
        }

        dispatch(bookSet(book));

        callback(book);
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

export const asyncEditBookSet = (bookData, callback) => {
  return (dispatch) => {
    dispatch(bookSetSendingData(true));

    console.log('UPDATE !');
    console.log(bookData);

    axios.patch(`/books/${bookData.id}`, {
      title: bookData.title
    })
    .then(response => {
      dispatch(bookSetEdited(true));
      dispatch(bookSet({...response.data}));

      callback(response.data);
    })
    .catch(err => {
      if (err.response && err.response.status === 422) {
        dispatch(bookSetErrors(err.response.data));
      }

      console.log('ERROR while editing book');
      console.log(err);

      dispatch(bookSetSendingData(false));
    });
  }
}

export const asyncUpdateBookCover = ({
  id, imageBase64
}, callback) => {
  return (dispatch) => {
    dispatch(bookSetSendingData(true));

    axios.post(`/books/${id}/cover`, {
      cover_base: imageBase64
    })
    .then(response => {
      if (response.data.success) {
        dispatch(bookSet(response.data.book));
        callback(response.data.book);
      } else {
        console.log("API fail to update cover");
        console.log(response.data);
      }
    })
    .catch(err => {
      console.log('Error while uploading cover');
      console.log(err);
    });
  }
}