import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import HomeScreen from '../../../../src/screens/home/home.component';

import ListBooks from '../../../../src/components/list-books/list-books.component';
import SharedFooter from '../../../../src/components/shared-footer/shared-footer.container';

import {
  List,
  ListItem,
  Spinner,
  Button,
  Text,
  Input,
} from 'native-base';

describe("HomeScreen Component", () => {
  const bookList = {
    books: []
  }

  const wrapper = shallow(
    <HomeScreen
      bookList={bookList}
      isVisitor={false}
    />
  );

  it("Has a list os books", () => {
    expect(
      wrapper.find(ListBooks).length
    ).to.equal(1);
  });

  it("wont display a button to create books if user is visitor", () => {
    const wrapperVisitor = shallow(
      <HomeScreen
        bookList={bookList}
        isVisitor={true}
      />
    );
    expect(
      wrapperVisitor.findWhere(c => c.key() === "createBookActionButton").length
    ).to.equal(0);
  });

  it("displays a button to create books if user is not visitor", () => {
    expect(
      wrapper.findWhere(c => c.key() === "createBookActionButton").length
    ).to.equal(1);
  });

  it("Has a footer", () => {
    expect(
      wrapper.find(SharedFooter).length
    ).to.equal(1);
  });

});