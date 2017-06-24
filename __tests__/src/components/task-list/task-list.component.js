import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import TaskList from '../../../../src/components/task-list/task-list.component';

import {
  List,
  ListItem,
  Spinner,
  Button,
  Text,
  Picker
} from 'native-base';

describe("Task List Component",() =>{
  const commomData = {
    tasks:[],
    isVisitor:true,
    book:{},
    user:{},
    categories:[],
    memberships: []
  }

  it("not show create task button is user is a visitor", () =>{
    const wrapper = shallow(
      <TaskList
        {...commomData}
      />
    );

    expect(
      wrapper.findWhere(c => c.key() === "createTaskActionButton")
        .length
    ).to.eq(0);
  });

  it("show create task button is user is a visitor", () =>{
    let data = Object.assign({}, commomData, {
      isVisitor: false,
      memberships: []
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

  it ("add more categorias when new categories is passed as props", () => {
    const wrapper = shallow(
      <TaskList
        {...commomData}
      />
    );

    wrapper.setProps({
      tasks: [
        {id: 1, title: "AA", category_id: 1 },
        {id: 2, title: "AB", category_id: 1 },
        {id: 3, title: "BA", category_id: 2 },
        {id: 4, title: "BB", category_id: 2 },
        {id: 5, title: "BC", category_id: 2 },
        {id: 6, title: "BD", category_id: 2 },
      ],

      categories: [
        {id: 1, name: "A"},
        {id: 2, name: "B"}
      ]
    });

    const picker = wrapper.find(Picker);
    expect(picker.length).to.eq(1);

    picker.simulate("valueChange", 2);

    expect(
      picker.find(Picker.Item)
      .length
    ).to.eq(3);
  });

  it ("Filter tasks based on the selected category", () => {
    const wrapper = shallow(
      <TaskList
        {...commomData}
      />
    );

    wrapper.setProps({
      tasks: [
        {id: 1, title: "AA", category_id: 1 },
        {id: 2, title: "AB", category_id: 1 },
        {id: 3, title: "BA", category_id: 2 },
        {id: 4, title: "BB", category_id: 2 },
        {id: 5, title: "BC", category_id: 2 },
        {id: 6, title: "BD", category_id: 2 },
      ],

      categories: [
        {id: 1, name: "A"},
        {id: 2, name: "B"}
      ]
    });

    wrapper.setState({ selectedCategory: 1 });

    let listItem = wrapper.find(ListItem);

    expect(listItem.length).to.eq(2)

    wrapper.setState({ selectedCategory: 2 });

    listItem = wrapper.find(ListItem);
    expect(listItem.length).to.eq(4);
  });
})
