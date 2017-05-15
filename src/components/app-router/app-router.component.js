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
  
  Main: { screen: MainScreen },
  CreateUser: { screen: CreateUserScreen },
  UserLogin: { screen: UserLoginScreen },
  EditUser: { screen: EditUserScreen },
});

export default AppRouter;
