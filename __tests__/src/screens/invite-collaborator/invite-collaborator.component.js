import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

import InviteCollaboratorComponent from '../../../../src/screens/invite-collaborator/invite-collaborator.component';
import GoBack from '../../../../src/components/go-back/go-back.component';

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
  const book = {
    id: 1,
    title: 'abc'
  }

  const user = {
    id: 10,
    name: "Fulano"
  }

  const commom = {
    user,
    book,
    isVisitor: false
  }

  const wrapper = shallow(
    <InviteCollaboratorComponent
      {...commom}
    />
  );

  it("Have one container", () => {
    expect(wrapper.length).to.equal(1);
  });

  it("has a go back button", () => {
    let nav = wrapper.find(GoBack);

    expect(nav.length).to.eq(1);
  });

  it("has a Input", () => {
    expect(wrapper.find(Input).length).to.eq(1);
  });

  it("has a Button", () => {
    expect(wrapper.find(Button).length).to.eq(1);
  });
});