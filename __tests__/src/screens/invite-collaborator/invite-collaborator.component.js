import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

import InviteCollaboratorComponent from '../../../../src/screens/invite-collaborator/invite-collaborator.component';
import GoBack from '../../../../src/components/go-back/go-back.component';
import initialState from '../../../../src/config/initial-state'

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
    name: "Fulano",
    email: 'qualquer@coisa.com'
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

  it("returns getInfo data", () => {
    const data = {
      sender_id: user.id,
      book_id: book.id,
      email: initialState.user.email
    }
    const testing = wrapper.instance().getInfo();

    expect(testing.sender_id).to.eq(data.sender_id);
    expect(testing.book_id).to.eq(data.book_id);
    expect(testing.email).to.eq(data.email);

  });

});