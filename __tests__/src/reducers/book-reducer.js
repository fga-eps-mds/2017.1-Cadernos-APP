import { shallow } from 'enzyme';
import { expect } from 'chai';

import {
  BOOK_SET,
  BOOK_SET_CREATED,
  BOOK_SET_ERRORS,
  BOOK_SET_SENDING_DATA
} from '../../../src/config/actions-types';

import initialState from '../../../src/config/initial-state';

import { bookReducer } from '../../../src/reducers';

describe("Book Reducer", () => {
  it("Set book into the store", () => {
    const book = bookReducer(initialState.bookList, {
      type: BOOK_SET,
      book: {id: 1}
    });

    expect(book.id).to.equal(1);
  });

  it("Set the book errors into the store", () => {
    const book = bookReducer(initialState.bookList, {
      type: BOOK_SET_ERRORS,
      errors: {name: ["Can't be blank"]}
    });

    expect(book.errors.name).to.contains("Can't be blank");
  });

  it("Set book sendingData into the store", () => {
    const book = bookReducer(initialState.bookList, {
      type: BOOK_SET_SENDING_DATA,
      sendingData: true
    });

    expect(book.sendingData).to.equal(true);
  });

  it("Set book created into the store", () => {
    const book = bookReducer(initialState.bookList, {
      type: BOOK_SET_CREATED,
      created: true
    });

    expect(book.created).to.equal(true);
  });
});