import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import CrateBookComponent from '../../../../src/screens/create-book/create-book.component';

import {
  List,
  ListItem,
  Spinner,
  Button,
  Text,
  Input
} from 'native-base';

describe("CreateBook Component", () => {
  it("Displays a Spinner when sending data but not a button", () => {
    const book = {
      sendingData: true,
      errors: {}
    }

    const wrapper = shallow(
      <CrateBookComponent
        book={book}
      />
    );

    expect(wrapper.find(Spinner).length).to.equal(1);
    expect(wrapper.find(Button).length).to.equal(0);
  });

  it("Displays a Button instead of Spinner when not sending data", () => {
    const book = {
      sendingData: false,
      errors: {}
    }

    const wrapper = shallow(
      <CrateBookComponent
        book={book}
      />
    );

    expect(wrapper.find(Spinner).length).to.equal(0);
    expect(wrapper.find(Button).length).to.equal(1);
  });

  it("The Button when pressed will pass the title and logged user to a props function", () => {
    const book = {
      sendingData: false,
      errors: {}
    }

    const user = {
      id: 5
    }

    const createBookProps = (data) => {
      expect(data.title).to.equal('test book title');
      expect(data.loggedUserId).to.equal(user.id);
    }

    const wrapper = shallow(
      <CrateBookComponent
        book={book}
        user={user}
        createBook={createBookProps}
      />
    );

    wrapper.setState({ title: 'test book title' });
    wrapper.find(Button).simulate('press');
  });
});