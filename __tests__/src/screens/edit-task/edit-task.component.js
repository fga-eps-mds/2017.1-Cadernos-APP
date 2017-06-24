import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

import EditTaskComponent from '../../../../src/screens/edit-task/edit-task.component';
import ImagePicker from '../../../../src/components/image-picker/image-picker.component';
import {
  List,
  ListItem,
  Spinner,
  Button,
  Text,
  Input,
  Picker,
  Item,
  Textarea
} from 'native-base';

describe("EditTask Component", () => {
  const task = {
    sendingData: false,
    errors: {}
  }

  const wrapper = shallow(
    <EditTaskComponent
      task={task}
    />
  );

  it("Displays three Button instead of Spinner when not sending data", () => {
    expect(wrapper.find(Spinner).length).to.equal(0);
    expect(wrapper.find(Button).length).to.equal(3);
  });

  it("Has a container", () => {
    expect(wrapper.length).to.eq(1);
  });

  it("has a picker", () => {
    expect(wrapper.find(Picker).length).to.eq(1);
  });

  it("has two Itens", () => {
    expect(wrapper.find(Item).length).to.eq(2);
  });

  it("has a input", () => {
    expect(wrapper.find(Input).length).to.eq(1);
  });

  it("has a textArea", () => {
    expect(wrapper.find(Textarea).length).to.eq(1);
  });

  it("has a imagePicker", () => {
    expect(wrapper.find(ImagePicker).length).to.eq(1);
  });

  it("has four pickerItems", () => {
    expect(wrapper.find(Picker).find(Picker.Item).length).to.eq(4);
  });
});