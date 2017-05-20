import React, { Component } from 'react';

import { Router, Scene } from 'react-native-router-flux';

import {
  CreateUserScreen,
  UserLoginScreen,
  MainScreen,
  CreateBookScreen,
  ListBooksScreen,
  ViewBookScreen,
  EditUserScreen,
  EditBookScreen,
  CreateTaskScreen
} from '../../screens';

export default class App extends Component {
  render() {
    return (
      <Router hideNavBar={true}>
        <Scene key="Main" component={MainScreen} initial />
        <Scene key="CreateUser" component={CreateUserScreen} />
        <Scene key="UserLogin" component={UserLoginScreen} />
        <Scene key="EditUser" component={EditUserScreen} />
        <Scene key="ListBooks" component={ListBooksScreen} />
        <Scene key="CreateBook" component={CreateBookScreen} />
        <Scene key="ViewBook" component={ViewBookScreen} />
        <Scene key="EditBook" component={EditBookScreen} />
        <Scene key="CreateTask" component={CreateTaskScreen} />
      </Router>
    );
  }
}