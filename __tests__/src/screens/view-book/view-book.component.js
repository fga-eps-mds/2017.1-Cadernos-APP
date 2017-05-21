import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import ViewBook from '../../../../src/screens/view-book/view-book.component';

import {
  Container,
  Content,
  Text,
  Button
} from 'native-base';


describe("ViewBook Component", () => {
  it("Wont display a button when user is visitor", () => {
    const book = {
      title: ''
    }

    const wrapper = shallow(
      <ViewBook
        isVisitor={true}
        book={book}
      />
    );
    expect(wrapper.find(Button).length).to.equal(0);
  });
});