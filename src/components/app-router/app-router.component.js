import React, { Component } from 'react';

import {
  StackNavigator,
} from 'react-navigation';

import {
  CreateUserScreen,
  UserLoginScreen,
  MainScreen,
  CreateBookScreen,
  ListBooksScreen
} from '../../screens';

const AppRouter = StackNavigator({
  ListBooks: { screen: ListBooksScreen },
  CreateBook: { screen: CreateBookScreen },
  Main: { screen: MainScreen },
  CreateUser: { screen: CreateUserScreen },
  UserLogin: { screen: UserLoginScreen }
});

export default AppRouter;
