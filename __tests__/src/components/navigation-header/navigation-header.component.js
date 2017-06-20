import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

// Note: test renderer must be required after react-native.
//import renderer from 'react-test-renderer';

import {
  Header,
  Button
} from 'native-base';

import NavigationHeader from '../../../../src/components/navigation-header/navigation-header.component.js';

describe("NavigationHeader Component", () => {
  const context = {
    openDrawer() {
      console.log("ehiuhkjashdksahdkjsah");
    }
  };

  const wrapper = shallow(
    <NavigationHeader title="huehue" displayGoBack={true} displayBookActions={true} />
    , { context }
  );

  it("has a Header", () => {
    let header = wrapper.find(Header);

    expect(
      header.length
    ).to.eq(1);
  });

  it("has button With ActionSheet", () => {
    let button = wrapper.findWhere(c => {
      return c.key() === "buttonWithActionSheet"
    });

    expect(
      button.length
    ).to.eq(1);

    button.simulate("press");
  })
});