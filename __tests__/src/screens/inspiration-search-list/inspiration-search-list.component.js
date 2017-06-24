import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

import InspirationListComponent from '../../../../src/screens/inspiration-list/inspiration-list.component';
import NavigationHeader from '../../../../src/components/navigation-header/navigation-header.component';
import SharedFooter from '../../../../src/components/shared-footer/shared-footer.container';

import {
  List,
  ListItem,
  Spinner,
  Button,
  Text,
  Input,
  Tab,
  Tabs,
  View
} from 'native-base';

import { Alert } from 'react-native';

describe("InspirationList Component", () => {
  const primary = {
    id: 1,
    userId: 10,
    title: 'abc'
  }

  const user = {
    id: 10,
    name: "Fulano"
  }

  const commom = {
    user,
    primary,
    inspirations: [],
    isVisitor: false
  }

  const wrapper = shallow(
    <InspirationListComponent
      {...commom}
    />
  );

  it("Have one container", () => {
    expect(wrapper.length).to.equal(1);
  });

  it("has a navigationHeader", () => {
    let nav = wrapper.find(NavigationHeader);

    expect(nav.length).to.eq(1);
  });

  it("has a List", () => {
    let list = wrapper.find(List);
    expect(list.length).to.eq(1);
  });
});