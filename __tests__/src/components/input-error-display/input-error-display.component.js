import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

// Note: test renderer must be required after react-native.
//import renderer from 'react-test-renderer';

import {
  View
} from 'native-base';

import InputErrorDisplayComponent    from '../../../../src/components/input-error-display/input-error-display.component.js';

describe("InputErrorDisplay Component", () => {
  const wrapper = shallow(
    <InputErrorDisplayComponent />
  );

  it("has a view", () => {
    let view =  wrapper.find(View);

    expect(
      view.length
    ).to.eq(1);
  });
});