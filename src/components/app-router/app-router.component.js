import React, { Component } from 'react';

import {
  StackNavigator,
} from 'react-navigation';

import {
  CreateUserScreen,
  UserLoginScreen,
  MainScreen,
  EditUserScreen
} from '../../screens';

const AppRouter = StackNavigator({
  EditUser: { screen: EditUserScreen },
  Main: { screen: MainScreen },
  CreateUser: { screen: CreateUserScreen },
  UserLogin: { screen: UserLoginScreen }
});

export default AppRouter;
