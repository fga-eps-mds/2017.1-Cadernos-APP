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
  ViewBookBaseTasks,
  ViewBookBaseCategories,
  ViewBookBaseColaborators,
  ViewTask
} from '../../screens';

import EditTask from '../../screens/edit-task/edit-task.component';
import MyTasks from '../../screens/my-tasks/my-tasks.component';

export default class AppRouter extends Component {
  render() {
    return (
      <Router hideNavBar={true}>
        <Scene key="Main" component={MainScreen} initial />
        <Scene key="MyTasks" component={MyTasks} />
        <Scene key="ViewBookBaseCategories" component={ViewBookBaseCategories} />
        <Scene key="ViewBookBaseColaborators" component={ViewBookBaseColaborators} />
        <Scene key="ViewBookBaseTasks" component={ViewBookBaseTasks} />
        <Scene key="CreateUser" component={CreateUserScreen} />
        <Scene key="UserLogin" component={UserLoginScreen} />
        <Scene key="Home" component={HomeScreen} />
        <Scene key="Profile" component={ProfileScreen} />
        <Scene key="EditUser" component={EditUserScreen} />
        <Scene key="CreateBook" component={CreateBookScreen} />
        <Scene key="ViewBook" component={ViewBookScreen} />
        <Scene key="EditBook" component={EditBookScreen} />
        <Scene key="ViewTask" component={ViewTask} />
        <Scene key="EditTask" component={EditTask} />
      </Router>
    );
  }
}
