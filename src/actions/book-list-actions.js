import {
  BOOK_LIST_SET,
  BOOK_LIST_SET_SENDING_DATA,
  BOOK_LIST_ADD_BOOK,
  BOOK_LIST_UPDATE_BOOK,
  BOOK_SEARCH
} from '../config/actions-types';
import axios, { getBaseUrl } from '../config/axios';

import initialState from '../config/initial-state';

export const getBookData = (book) => {
  return {
    id: book.id,
    title: book.title,
    userId: book.user_id,
    coverOriginal: `${getBaseUrl()}${book.cover_original}`,
    coverMedium: `${getBaseUrl()}${book.cover_medium}`,
    coverThumb: `${getBaseUrl()}${book.cover_thumb}`
  }
}

export const bookListSet = (booksArray) => {
  const books = booksArray.map(book => getBookData(book));


  return {
    type: BOOK_LIST_SET,
    bookList: {
      sendingData: initialState.bookList.sendingData,
      books
    }
  }
}

export const bookListAddBook = (book) => {
  return {
    type: BOOK_LIST_ADD_BOOK,
    book
  }
}

export const bookListSetSendingData = (sendingData) => {
  return {
    type: BOOK_LIST_SET_SENDING_DATA,
    sendingData
  }
}

export const bookListUpdateBook = (book) => {
  return {
    type: BOOK_LIST_UPDATE_BOOK,
    book: getBookData(book)
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

export const searchBooks = (keyword, callback) => {
  return (dispatch) => {
     console.log("vai pequisar");
     axios.get(`/book/search/${keyword}`)
    .then(response => {
           if (response.data[0] == null) {
             console.log("eae men")
             callback();
           }else{
             dispatch(bookListSet(response.data));
           }
    })
    .catch(err => {
           // Meybe an user internet error
           console.log('Error while searching');
           console.log(err);
    })
    .finally(() => {
           dispatch(bookListSetSendingData(false));
    });
  }
}
