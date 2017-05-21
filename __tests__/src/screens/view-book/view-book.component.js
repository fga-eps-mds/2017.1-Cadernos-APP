import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

import renderer from 'react-test-renderer';

import ViewBookComponent from '../../../../src/screens/view-book/view-book.component';

import {
  List,
  ListItem,
  Spinner,
  Button,
  Text,
  Input
} from 'native-base';

describe("CreateBook Component", () => {
  it("Display edit button for authorized users", () => {
    const book = {
      id: 1,
      userId: 1,
      title: 'abc'
    }

    const user = {
      id: 1
    }

    const wrapper = shallow(
      <ViewBookComponent user={user} book={book}/>
    );

    expect(wrapper.find(Button).length).to.equal(1);
  });

  it("Not displaying edit button for unauthorized users", () => {
    const book = {
      id: 1,
      userId: 10,
      title: 'abc'
    }

    const user = {
      id: 1
    }

    const wrapper = shallow(
      <ViewBookComponent user={user} book={book}/>
    );

    expect(wrapper.find(Button).length).to.equal(0);
  });

});
