import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import CrateTaskComponent from '../../../../src/screens/create-task/create-task.component';

import {
  List,
  ListItem,
  Spinner,
  Button,
  Text,
  Input
} from 'native-base';


describe("CreateTask Component", () => {
  it("Displays a Spinner when sending data but not a button", () => {
    const task = {
      sendingData: true,
      errors: {}
    }

    const wrapper = shallow(
      <CrateTaskComponent
        task={task}
      />
    );

    expect(wrapper.find(Spinner).length).to.equal(1);
    expect(wrapper.find(Button).length).to.equal(0);
});

it("Displays a Button instead of Spinner when not sending data", () => {
   const task = {
     sendingData: false,
     errors: {}
   }

   const wrapper = shallow(
     <CrateTaskComponent
       task={task}
     />
   );

   expect(wrapper.find(Spinner).length).to.equal(0);
   expect(wrapper.find(Button).length).to.equal(1);
});
});
