import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

import InviteListComponent from '../../../../src/screens/invite-list/invite-list.component';
import NavigationHeader from '../../../../src/components/navigation-header/navigation-header.component';

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

describe("InviteList Component", () => {


  const wrapper = shallow(
    <InviteListComponent
      invites={[]}
    />
  );

  it("Has no button if theres no invite", () => {
    expect(wrapper.find(Button).length).to.equal(0);
  });

  it("has two button if theres one invite", () => {
    const invite = {
      email: 'whatever@email.com',
      book_id: 1,
      sender_id: 10,
      id: 1
    }

    const wrapper = shallow(
      <InviteListComponent
        invites={[invite]}
      />
    );
    expect(wrapper.find(Button).length).to.eq(2);
  });

  it("Has a ListItem", () => {
    expect(wrapper.length).to.eq(1);
  });

  it("has a nav header", () => {
    expect(wrapper.find(NavigationHeader).length).to.eq(1);
  });
});