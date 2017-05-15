import { shallow } from 'enzyme';
import { expect } from 'chai';

import {
  BOOK_SET,
  BOOK_SET_ERRORS,
  BOOK_SET_SENDING_DATA,
  BOOK_SET_CREATED
} from '../../../src/config/actions-types';

import initialState from '../../../src/config/initial-state';

import {
  bookSet,
  bookSetErrors,
  bookSetSendingData,
  bookSetCreated
} from '../../../src/actions/book-actions';

describe("Book Actions", () => {
  it("Set the entire book to the reducer", () => {
    const bookData = {
      ...initialState.book,
      id: 1, title: 'test book', userId: 1
    };

    const reducerAction = bookSet(bookData);

    expect(reducerAction.type).to.equal(BOOK_SET);
    expect(reducerAction.book.id).to.equal(bookData.id);
    expect(reducerAction.book.title).to.equal(bookData.title);
    expect(reducerAction.book.userId).to.equal(bookData.userId);
  });

  it("Set the book errors to the reducer", () => {
    const errorData = {
      title: ["Can't be blank"]
    };

    const reducerAction = bookSetErrors(errorData);

    expect(reducerAction.type).to.equal(BOOK_SET_ERRORS);
    expect(reducerAction.errors.title).to.contains(errorData.title[0]);
  });

  it("Set the book sending data to the reducer", () => {
    const sendingData = true;

    const reducerAction = bookSetSendingData(sendingData);

    expect(reducerAction.type).to.equal(BOOK_SET_SENDING_DATA);
    expect(reducerAction.sendingData).to.equal(sendingData);
  });

  it("Set the book created to the reducer", () => {
    const created = true;

    const reducerAction = bookSetCreated(created);

    expect(reducerAction.type).to.equal(BOOK_SET_CREATED);
    expect(reducerAction.created).to.equal(created);
  });
});