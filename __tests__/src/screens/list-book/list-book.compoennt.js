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
    const wrapper = shallow(
      <ListBookComponent
        sendingData={true}
        books={[]}
        navigation={{}}
      />
    );

    expect(
      wrapper.find(Spinner).length
    ).to.equal(1);
  });

  it("won't display a Spinner when sendingData is false", () => {
    const wrapper = shallow(
      <ListBookComponent
        sendingData={false}
        books={[]}
        navigation={{}}
      />
    );

    expect(
      wrapper.find(Spinner).length
    ).to.equal(0);
  });

  it("display a book list when sendingData is false", () => {
    const books = [
      {id: 1, title: "A"},
      {id: 2, title: "B"}
    ];

    const wrapper = shallow(
      <ListBookComponent
        sendingData={false}
        books={books}
        navigation={{}}
      />
    );

    expect(
      wrapper.find(List).length
    ).to.equal(1);

    expect(
      wrapper.find(ListItem).length
    ).to.equal(books.length);
  });

  it("has a button to create a book", () => {
    const wrapper = shallow(
      <ListBookComponent
        sendingData={false}
        books={[]}
        navigation={{}}
      />
    );

    expect(
      wrapper.find(Button).length
    ).to.equal(1);

    expect(
      wrapper.find(Button).contains(<Text>Criar caderno</Text>)
    ).to.equal(true);
  });

  it("The book on press navigate to CreateBook", () => {
    const navigation = {
      navigate: (route) => {
        expect(route).to.equal('CreateBook');
      }
    }

    const wrapper = shallow(
      <ListBookComponent
        sendingData={false}
        books={[]}
        navigation={navigation}
      />
    );

    const button = wrapper.find(Button);
    button.simulate('press');
  });

  it("the ListItem on press navigate to ViewBook", () => {
    const books = [
      {id: 1, title: "A"},
      {id: 2, title: "B"},
    ];

    const INDEX_BOOK_TO_FIND = 1;

    const navigation = {
      navigate: (route, params) => {
        expect(route).to.equal('ViewBook');
        expect(params.book.id).to.equal(books[INDEX_BOOK_TO_FIND].id);
        expect(params.book.title).to.equal(books[INDEX_BOOK_TO_FIND].title);
      }
    }

    const wrapper = shallow(
      <ListBookComponent
        sendingData={false}
        books={books}
        navigation={navigation}
      />
    );

    const bookListItem = wrapper.findWhere(component =>  component.key() == books[INDEX_BOOK_TO_FIND].id);
    expect(bookListItem.length).to.equal(1);

    bookListItem.simulate('press');
  });
});