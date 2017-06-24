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
  ProfileScreen,
  ViewTask,
  CreateTaskScreen,
  EditTaskScreen,
  InspirationListScreen,
  InspirationSearchListScreen,
  ViewInspirationScreen,
  InviteCollaboratorScreen,
  InviteListScreen,
  SketchScreen


} from '../../screens';


export default class AppRouter extends Component {
  render() {
    return (
      <Router hideNavBar={true}>

        <Scene key="Main" component={MainScreen} initial />
        <Scene key="CreateUser" component={CreateUserScreen} />
        <Scene key="UserLogin" component={UserLoginScreen} />
        <Scene key="Home" component={HomeScreen} />
        <Scene key="Profile" component={ProfileScreen} />
        <Scene key="EditUser" component={EditUserScreen} />
        <Scene key="CreateBook" component={CreateBookScreen} />
        <Scene key="ViewBook" component={ViewBookScreen} />
        <Scene key="EditBook" component={EditBookScreen} />
        <Scene key="ViewTask" component={ViewTask} />
        <Scene key="EditTask" component={EditTaskScreen} />
        <Scene key="CreateTask" component={CreateTaskScreen} />
        <Scene key="InspirationList" component={InspirationListScreen} />
        <Scene key="InspirationSearchList" component={InspirationSearchListScreen} />
        <Scene key="ViewInspiration" component={ViewInspirationScreen} />
        <Scene key="InviteCollaborator" component={InviteCollaboratorScreen} />
        <Scene key="InviteList" component={InviteListScreen} />
        <Scene key="Sketch" component={SketchScreen} />
      </Router>
    );
  }
}
