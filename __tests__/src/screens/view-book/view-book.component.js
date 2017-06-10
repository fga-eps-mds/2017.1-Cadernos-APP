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
      <ViewBookComponent
        user={user}
        book={book}
        tasks={[]}
        isVisitor={false}
        sendingData={false}
      />
    );

    const editButton = wrapper.findWhere(c => c.key() == "edit-book-button")
    const deleteButton = wrapper.findWhere(c => c.key() == "delete-book-button")

    expect(editButton.prop("disabled")).to.equal(false);
    expect(deleteButton.prop("disabled")).to.equal(false);

  });

  it("Disable edit and delete buttons for unauthorized users", () => {
    const book = {
      id: 1,
      userId: 10,
      title: 'abc'
    }

    const user = {
      id: 1
    }

    const wrapper = shallow(
      <ViewBookComponent
        user={user}
        book={book}
        tasks={[]}
        isVisitor={false}
        sendingData={false}
      />
    );

    const editButton = wrapper.findWhere(c => c.key() == "edit-book-button")
    const deleteButton = wrapper.findWhere(c => c.key() == "delete-book-button")

    expect(editButton.prop("disabled")).to.equal(true);
    expect(deleteButton.prop("disabled")).to.equal(true);
  });

});

