import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import MainComponent from '../../../../src/screens/main/main.component';

import {
  Button
} from 'native-base';

describe("Main Component", () => {
  const commom = {
    rememberLogin: true,
    setupUserLogin(data) {
    }
  }

  it("Displays two buttons", () => {
    const wrapper = shallow(
      <MainComponent {...commom} />
    );

    let buttons = wrapper.find(Button);
    expect(buttons.length).to.eq(2);
  });
});