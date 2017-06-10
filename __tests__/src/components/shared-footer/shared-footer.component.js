import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import { SharedFooter } from '../../../../src/components';

import {
  Button
} from 'native-base';

describe("SharedFooter Component", () => {
  it("Has 3 tab buttons", () => {
    const wrapper = shallow(<SharedFooter activeTab="books" isVisitor={false} />);

    expect(
      wrapper.find(Button)
      .length
    ).to.equal(1);
  });

  it("wont show profile tab if the user a visitor", () => {
    const wrapper = shallow(<SharedFooter activeTab="books" isVisitor={true} />);

    expect(
      wrapper.findWhere(c => c.key() === "profileTabButton")
        .length
    ).to.equal(0);
  });
});