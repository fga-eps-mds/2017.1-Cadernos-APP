import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import SharedFooter from '../../../../src/components/shared-footer/shared-footer.component';

import {
  Button,
  Input
} from 'native-base';

describe("SharedFooter Component", () => {
  const wrapper = shallow(<SharedFooter activeTab="books" isVisitor={false} />);

  it("Has a button to search", () => {
    expect(
      wrapper.find(Button).length
    ).to.equal(1);
  });

  it("Has a input to search", () => {
    expect(
      wrapper.find(Input).length
    ).to.equal(1);
  });

});