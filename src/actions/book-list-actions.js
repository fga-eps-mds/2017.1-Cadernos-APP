import { BOOK_LIST_SET, BOOK_LIST_SET_SENDING_DATA } from '../config/actions-types';
import axios, { getBaseUrl } from '../config/axios';

import initialState from '../config/initial-state';

export const bookListSet = (booksArray) => {
  const books = booksArray.map(book => {
    return {
      id: book.id,
      title: book.title,
      userId: book.user_id,
      cover: `${getBaseUrl()}${book.cover}`,
    } ;
  });

  return {
    type: BOOK_LIST_SET,
    bookList: {
      sendingData: initialState.bookList.sendingData,
      books
    }
  }
}

export const bookListSetSendingData = (sendingData) => {
  return {
    type: BOOK_LIST_SET_SENDING_DATA,
    sendingData
  }
}

export const asyncBookListSet = () => {
  return (dispatch) => {
    dispatch(bookListSetSendingData(true));

    axios.get('/books')
    .then(response => {
      if (response.data) {
        dispatch(bookListSet(response.data));
      }
    })
    .catch(err => {
      // Meybe an user internet error
      console.log('Error while getting books, see asyncBookListSet');
      console.log(err);
    })
    .finally(() => {
      dispatch(bookListSetSendingData(false));
    });
  }
}
