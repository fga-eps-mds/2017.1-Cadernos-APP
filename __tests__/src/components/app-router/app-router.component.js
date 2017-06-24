import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

// Note: test renderer must be required after react-native.
//import renderer from 'react-test-renderer';

import {
  Router,
  Scene
} from 'react-native-router-flux';

import AppRouter from '../../../../src/components/app-router/app-router.component.js';

describe("AppRouter Component", () => {
  const wrapper = shallow(
    <AppRouter />
  );

  it("it has a Router", () => {
    let router = wrapper.find(Router);
    expect(router.length).to.eq(1);
  });

  it("it has 20 Scenes", () => {
    let scenes = wrapper.find(Scene);
    expect(scenes.length).to.eq(21);
  });
});