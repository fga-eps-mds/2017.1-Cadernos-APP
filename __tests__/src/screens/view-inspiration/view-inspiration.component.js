import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

import ViewInspirationComponent from '../../../../src/screens/view-inspiration/view-inspiration.component';
import TaskList from '../../../../src/components/task-list/task-list.component';
import NavigationHeader from '../../../../src/components/navigation-header/navigation-header.component';

import {
  List,
  ListItem,
  Spinner,
  Button,
  Text,
  Input,
  Tab,
  Tabs
} from 'native-base';

describe("ViewInspiration Component", () => {
  const inspiration = {
    id: 1,
    userId: 10,
    title: 'abcde'
  }

  const user = {
    id: 1,
    name: "Fulano"
  }

  let getInspirationId = () => {
    return inspiration.id;
  }

  const commom = {
    user,
    inspiration,
    inspirationTasks:[],
    memberships:[],
    isVisitor:false,
    sendingData:false,
    categories:[]
  }

  const wrapper = shallow(
    <ViewInspirationComponent
      {...commom}
    />
  );

  it("get the inspiration id", () => {
    expect(inspiration.id).to.equal(getInspirationId());
  });

  it("Have one view", () => {
    expect(wrapper.length).to.equal(1);
  });

  it("has a navigation header", () => {
    let nav = wrapper.find(NavigationHeader);
    expect(nav.length).to.eq(1);
  })

  it("has tabs with one tabs", () => {
    let tabs = wrapper.find(Tabs);

    expect(tabs.length).to.eq(1);
    expect(
      tabs.find(Tab)
      .length
    ).to.eq(1);
  });

  it ("has a TaskList inside a tab", () => {
    let tabs = wrapper.find(Tabs);

     expect(
      tabs.find(TaskList)
      .length
    ).to.eq(1);
  });
});