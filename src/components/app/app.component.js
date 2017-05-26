import React, { Component } from 'react';

import { Router, Scene } from 'react-native-router-flux';

import {
  CreateUserScreen,
  UserLoginScreen,
  MainScreen,
  CreateBookScreen,
  ViewBookScreen,
  EditUserScreen,
  EditBookScreen,
  HomeScreen,
  ProfileScreen
} from '../../screens';

export default class App extends Component {
  render() {
    return (
      <Router hideNavBar={true}>
        <Scene key="Main" component={MainScreen} />
        <Scene key="CreateUser" component={CreateUserScreen} />
        <Scene key="UserLogin" component={UserLoginScreen} />
        <Scene key="Home" component={HomeScreen} initial/>
        <Scene key="Profile" component={ProfileScreen} />
        <Scene key="EditUser" component={EditUserScreen} />
        <Scene key="CreateBook" component={CreateBookScreen} />
        <Scene key="ViewBook" component={ViewBookScreen} />
        <Scene key="EditBook" component={EditBookScreen} />
      </Router>
    );
  }
}