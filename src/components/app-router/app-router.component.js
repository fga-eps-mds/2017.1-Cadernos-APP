import React, { Component } from 'react';

import {
  StackNavigator,
} from 'react-navigation';

import {
  CreateUserScreen,
  UserLoginScreen,
  MainScreen,
  CreateBookScreen,
  ListBooksScreen,
  ViewBookScreen,
  EditUserScreen,
} from '../../screens';

const AppRouter = StackNavigator({
  Main: { screen: MainScreen },
  CreateUser: { screen: CreateUserScreen },
  UserLogin: { screen: UserLoginScreen },
  EditUser: { screen: EditUserScreen },
  ListBooks: { screen: ListBooksScreen },
  CreateBook: { screen: CreateBookScreen },
  ViewBook: { screen: ViewBookScreen }
});

export default AppRouter;
