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

describe("ViewBook Component", () => {
  it("Display edit and delete button for authorized users", () => {
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

    expect(wrapper.find(Button).length).to.equal(2);
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

  it("Wont display a button when user is visitor", () => {
    const book = {
      title: ''
    }

    const user = {
      id: 0
    }

    const wrapper = shallow(
      <ViewBookComponent
        isVisitor={true}
        book={book}
        user={user}
      />
    );
    expect(wrapper.find(Button).length).to.equal(0);
  });

});

