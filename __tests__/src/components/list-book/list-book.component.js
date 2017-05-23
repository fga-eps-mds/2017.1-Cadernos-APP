import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import ListBookComponent from '../../../../src/components/list-books/list-books.component';

import {
  List,
  ListItem,
  Spinner,
  Button,
  Text
} from 'native-base';

describe("ListBookComponent Component", () => {
  it("display a Spinner when loading books", () => {
    const wrapper = shallow(
      <ListBookComponent
        books={[]}
        isVisitor={false}
        onBookSelected={() => {}}
      />
    );

    expect(
      wrapper.find(Spinner).length
    ).to.equal(1);
  });

  it("won't display a Spinner when books is not empty", () => {
    const books = [
      { id: 1, title: "A" },
      { id: 2, title: "B" }
    ];

    const wrapper = shallow(
      <ListBookComponent
        books={books}
        isVisitor={false}
        onBookSelected={() => {}}
      />
    );

    expect(
      wrapper.find(Spinner).length
    ).to.equal(0);
  });

  it("display a book list when books is not empty", () => {
    const books = [
      { id: 1, title: "A" },
      { id: 2, title: "B" }
    ];

    const wrapper = shallow(
      <ListBookComponent
        books={books}
        isVisitor={false}
        onBookSelected={() => {}}
      />
    );

    expect(
      wrapper.find(List).length
    ).to.equal(1);

    expect(
      wrapper.find(ListItem).length
    ).to.equal(books.length);
  });
});