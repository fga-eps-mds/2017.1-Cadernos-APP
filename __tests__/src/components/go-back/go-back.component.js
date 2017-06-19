import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

// Note: test renderer must be required after react-native.
//import renderer from 'react-test-renderer';

import {
  View,
  Button
} from 'native-base';

import GoBackComponent from '../../../../src/components/go-back/go-back.component.js';

describe("GoBackComponent Component", () => {
  const wrapper = shallow(
    <GoBackComponent />
  );

  it("has a view", () => {
    let view =  wrapper.find(View);

    expect(
      view.length
    ).to.eq(1);
  });
});