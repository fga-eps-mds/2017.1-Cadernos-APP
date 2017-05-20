import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import ListBookComponent from '../../../../src/screens/list-books/list-books.component';

import {
  List,
  ListItem,
  Spinner,
  Button,
  Text
} from 'native-base';

describe("ListBookComponent Component", () => {
  it("display a Spinner when sendingData", () => {
    const bookList = {
      books: [],
      sendingData: true
    }

    const wrapper = shallow(
      <ListBookComponent
        bookList={bookList}
      />
    );

    expect(
      wrapper.find(Spinner).length
    ).to.equal(1);
  });

  it("won't display a Spinner when sendingData is false", () => {
    const bookList = {
      books: [],
      sendingData: false
    }

    const wrapper = shallow(
      <ListBookComponent
        bookList={bookList}
      />
    );

    expect(
      wrapper.find(Spinner).length
    ).to.equal(0);
  });

  it("display a book list when sendingData is false", () => {
    const bookList = {
      books: [
        {id: 1, title: "A"},
        {id: 2, title: "B"}
      ],
      sendingData: false
    }

    const wrapper = shallow(
      <ListBookComponent
        bookList={bookList}
      />
    );

    expect(
      wrapper.find(List).length
    ).to.equal(1);

    expect(
      wrapper.find(ListItem).length
    ).to.equal(bookList.books.length);
  });

  it("has a button to create a book", () => {
    const bookList = {
      books: [],
      sendingData: false
    }

    const wrapper = shallow(
      <ListBookComponent
        bookList={bookList}
      />
    );

    expect(
      wrapper.find(Button).length
    ).to.equal(1);

    expect(
      wrapper.find(Button).contains(<Text>Criar caderno</Text>)
    ).to.equal(true);
  });

  it("the ListItem on press navigate to ViewBook", () => {
    const bookList = {
      books: [
        {id: 1, title: "A"},
        {id: 2, title: "B"}
      ],
      sendingData: false
    }

    const INDEX_BOOK_TO_FIND = 1;

    const viewBook = (book) => {
      expect(book.id).to.equal(bookList.books[INDEX_BOOK_TO_FIND].id);
      expect(book.title).to.equal(bookList.books[INDEX_BOOK_TO_FIND].title);
    }

    const wrapper = shallow(
      <ListBookComponent
        bookList={bookList}
        viewBook={viewBook}
      />
    );

    const bookListItem = wrapper.findWhere(component =>  component.key() == bookList.books[INDEX_BOOK_TO_FIND].id);
    expect(bookListItem.length).to.equal(1);

    bookListItem.simulate('press');
  });
});