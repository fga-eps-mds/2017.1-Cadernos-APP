import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import UserLogin from '../../../../src/screens/user-login/user-login.component';

import {
  Text,
  View,
  Container,
  Content,
  H1,
  Item,
  Input,
  Button,
  Spinner
} from 'native-base';


describe("UserLogin Component", () => {
  it("Displays a Spinner when sending data but not a button", () => {

    const wrapper = shallow(
      <UserLogin
        sendingData={true}
        errors={[]}
        cleanUserErrors = {() => {}}
      />
    );

    expect(wrapper.find(Spinner).length).to.equal(1);
    expect(wrapper.find(Button).length).to.equal(0);
  });

  it("Displays two Buttons instead of Spinner when not sending data", () => {

    const wrapper = shallow(
      <UserLogin
        sendingData={false}
        errors={[]}
        cleanUserErrors = {() => {}}
      />
    );

    expect(wrapper.find(Spinner).length).to.equal(0);
    expect(wrapper.find(Button).length).to.equal(2);
  });
});