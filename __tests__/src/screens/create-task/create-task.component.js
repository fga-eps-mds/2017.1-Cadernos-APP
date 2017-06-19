import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

import CreateTask from '../../../../src/screens/create-task/create-task.component.js';

import {
  Container,
  Button
} from 'native-base';

describe("CreateTask Component", () => {
  const commom = {
    createTask() {},
    categories: [],
    sendingData: false
  }

  const wrapper = shallow(
      <CreateTask
        {...commom}
      />
    );


  it("wraps its contents within a Container", () => {
    container = wrapper.find(Container);
    expect(container.length).to.equal(1);
  });

  it("has a button the pass the form data", () => {
    let tested = false;

    wrapper.setProps({
      createTask(data) {
        tested = true;
      },
      user: {
        id: 1
      },
      book: {
        id: 2
      }
    });

    button = wrapper.find(Button);
    button.simulate("press");

    expect(tested).to.eq(true);
  })
});