import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import HomeComponent from '../../../../src/screens/home/home.component';

import ListBooks from '../../../../src/components/list-books/list-books.component';
import SharedFooter from '../../../../src/components/shared-footer/shared-footer.component';

import {
  List,
  ListItem,
  Spinner,
  Button,
  Text,
  Input
} from 'native-base';

describe("HomeComponent Component", () => {
  it("Has a list os books", () => {
    const bookList = {
      books: []
    }

    const wrapper = shallow(
      <HomeComponent
        bookList={bookList}
        isVisitor={false}
      />
    );

    expect(
      wrapper.find(ListBooks).length
    ).to.equal(1);
  });

  it("wont display a button to create books if user is visitor", () => {
    const bookList = {
      books: []
    }

    const wrapper = shallow(
      <HomeComponent
        bookList={bookList}
        isVisitor={true}
      />
    );

    expect(
      wrapper.findWhere(c => c.key() === "createBookActionButton").length
    ).to.equal(0);
  });

  it("displays a button to create books if user is not visitor", () => {
    const bookList = {
      books: []
    }

    const wrapper = shallow(
      <HomeComponent
        bookList={bookList}
        isVisitor={false}
      />
    );

    expect(
      wrapper.findWhere(c => c.key() === "createBookActionButton").length
    ).to.equal(1);
  });

  it("Has a footer", () => {
    const bookList = {
      books: []
    }

    const wrapper = shallow(
      <HomeComponent
        bookList={bookList}
        isVisitor={false}
      />
    );

    expect(
      wrapper.find(SharedFooter).length
    ).to.equal(1);
  });
});