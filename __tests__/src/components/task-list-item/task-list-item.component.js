import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

import renderer from 'react-test-renderer';

import ViewBookComponent from '../../../../src/screens/view-book/view-book.component';
import TaskListItem from '../../../../src/components/task-list-item/task-list-item.component';

import {
  View,
  Text
} from 'native-base';

import { TouchableOpacity } from 'react-native';

describe("ViewBook Component", () => {
  const user = {
    id: 1,
    name: "Fulano"
  }

  const commom = {
    task: {
      id: 2,
      bookId: 3,
      title: "Una task de buenas",
      user
    }
  }

  const wrapper = shallow(
    <TaskListItem
      {...commom}
    />
  );

  it("Have one TouchableOpacity", () => {
    expect(wrapper.find(TouchableOpacity).length).to.eq(1);
  });

  it("Have one View", () => {
    expect(wrapper.find(View).length).to.eq(1);
  });

   it("Have one Text", () => {
    expect(wrapper.find(Text).length).to.eq(1);
  });
});