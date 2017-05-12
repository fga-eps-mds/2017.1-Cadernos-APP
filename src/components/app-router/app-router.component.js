import React, { Component } from 'react';

import {
  StackNavigator,
} from 'react-navigation';

import {
  CreateUserScreen,
  UserLoginScreen,
  MainScreen,
  CreateBookScreen
} from '../../screens';

const AppRouter = StackNavigator({
  CreateBook: { screen: CreateBookScreen },
  Main: { screen: MainScreen },
  CreateUser: { screen: CreateUserScreen },
  UserLogin: { screen: UserLoginScreen }
});

export default AppRouter;
