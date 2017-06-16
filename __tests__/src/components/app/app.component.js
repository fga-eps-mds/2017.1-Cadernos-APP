import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import AppComponent from '../../../../src/components/app/app.component';

import {
  Drawer
} from 'native-base';

describe("App Component", () => {

  const wrapper = shallow(
    <AppComponent />
  );

  it("has a Drawer", () => {
    let drawer = wrapper.find(Drawer);
    expect(drawer.length).to.eq(1);
  });
});