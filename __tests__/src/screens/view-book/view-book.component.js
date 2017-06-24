import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

import ViewBookComponent from '../../../../src/screens/view-book/view-book.component';
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

describe("ViewBook Component", () => {

  const book = {
    id: 1,
    userId: 10,
    title: 'abc'
  }

  let getBookId = () => {
    return book.id
  }

  const user = {
    id: 1,
    name: "Fulano"
  }

  const commom = {
    user,
    book,
    tasks: [],
    memberships: [],
    isVisitor: false,
    sendingData: false,
    categories: []
  }

  const wrapper = shallow(
    <ViewBookComponent
      {...commom}
    />
  );

  it("Have one view", () => {
    expect(wrapper.length).to.equal(1);
  });

  it("Has a NavigationHeader", () => {
    expect(wrapper.find(NavigationHeader).length).to.eq(1);
  });

  it("Have invite collaborator Button", () => {
    expect(wrapper.contains(<Text>Convidar colaborador</Text>)).to.equal(true);
  });

  it("Have pendent invites", () => {
    expect(wrapper.contains(<Text>Convites pendentes</Text>)).to.equal(true);
  });

  it("has tabs with two tabs", () => {
    let tabs = wrapper.find(Tabs);

    expect(tabs.length).to.eq(1);
    expect(
      tabs.find(Tab)
        .length
    ).to.eq(2);
  });

  it("has a TaskList inside a tab", () => {
    let tabs = wrapper.find(Tabs);

    expect(
      tabs.find(TaskList)
        .length
    ).to.eq(1);
  });

  it("Get the id of the book", () => {
    expect(getBookId()).to.eq(book.id);
  });

  it("Has 1 membership (book owner)", () => {
    expect(wrapper.find(ListItem).find(Text).length).to.eq(1);
  });

  it("Has two memberships (book owner + external artist)", () => {
    const membership = {
      member_name: "qualquer coisa",
      id: 1
    }

    const commom = {
      user,
      book,
      tasks: [],
      memberships: [membership],
      isVisitor: false,
      sendingData: false,
      categories: []
    }
    const wrapper = shallow(
      <ViewBookComponent
        {...commom}
      />
    );
    expect(wrapper.find(ListItem).find(Text).length).to.eq(2);
  });

});

/*
componentDidMount() {
    this.props.fetchBookTasks(this.props.book);
    this.props.fetchCategories();
    this.props.getMemberships(this.props.book);
  }
  */