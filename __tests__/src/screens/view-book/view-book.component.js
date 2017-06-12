import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

import renderer from 'react-test-renderer';

import ViewBookComponent from '../../../../src/screens/view-book/view-book.component';

import {
  List,
  ListItem,
  Spinner,
  Button,
  Text,
  Input
} from 'native-base';

describe("ViewBook Component", () => {
  const book = {
    id: 1,
    userId: 10,
    title: 'abc'
  }

  const user = {
    id: 1
  }

  const wrapper = shallow(
    <ViewBookComponent
      user={user}
      book={book}
      tasks={[]}
      memberships={[]}
      isVisitor={false}
      sendingData={false}
      categories={[]}
    />
  );

  it("Have one view", () => {
    expect(wrapper.length).to.equal(1);
  });

  it("Have invite collaborator Button", () => {
    expect(wrapper.contains(<Text>Convidar colaborador</Text>)).to.equal(true);
  });

  it("Have pendent invites", () => {
    expect(wrapper.contains(<Text>Convites pendentes</Text>)).to.equal(true);
  });
});
