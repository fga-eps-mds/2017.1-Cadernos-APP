import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import EditBookComponent from '../../../../src/screens/edit-book/edit-book.component';

import {
  List,
  ListItem,
  Spinner,
  Button,
  Text,
  Input
} from 'native-base';

describe("EditBook Component", () => {
  it("Displays a Button instead of Spinner when not sending data", () => {
    const book = {
      sendingData: false,
      errors: {}
    }

    const wrapper = shallow(
      <EditBookComponent
        book={book}
      />
    );

    expect(wrapper.find(Spinner).length).to.equal(0);
    expect(wrapper.find(Button).length).to.equal(1);
  });

  it("Displays a Spinner when sending data but not a button", () => {
    const book = {
      sendingData: true,
      errors: {}
    }

    const wrapper = shallow(
      <EditBookComponent
        book={book}
      />
    );

    expect(wrapper.find(Spinner).length).to.equal(1);
    expect(wrapper.find(Button).length).to.equal(0);
  });

});