import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import TaskList from '../../../../src/components/task-list/task-list.component';

import TaskListItem from '../../../../src/components/task-list-item/task-list-item.component';

import {
  List,
  ListItem,
  Spinner,
  Button,
  Text
} from 'native-base';

describe("Task List Component",() =>{
  const commomData = {
    tasks:[],
    isVisitor:true,
    book:{},
    user:{},
    categories:[]
  }

  it("not show create task button is user is a visitor", () =>{
    const wrapper = shallow(
      <TaskList
        {...commomData}
      />
    );

    expect(
      wrapper.findWhere(c => c.key() === "createBookActionButton")
        .length
    ).to.eq(0);
  });

  it("show create task button is user is a visitor", () =>{
    let data = Object.assign({}, commomData, {
      isVisitor: false
    })

    const wrapper = shallow(
      <TaskList
        {...data}
      />
    );

    expect(
      wrapper.findWhere(c => c.key() === "createBookActionButton")
        .length
    ).to.eq(1);

    wrapper.setProps({tasks: [{id: 1}, {id: 4}]})
  });
})
