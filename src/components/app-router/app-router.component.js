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
  EditBookScreen,
  CreateActivityScreen
} from '../../screens';

const AppRouter = StackNavigator({
  Main: { screen: MainScreen },
  CreateUser: { screen: CreateUserScreen },
  UserLogin: { screen: UserLoginScreen },
  EditUser: { screen: EditUserScreen },
  ListBooks: { screen: ListBooksScreen },
  CreateBook: { screen: CreateBookScreen },
  ViewBook: { screen: ViewBookScreen },
  EditBook: {screen: EditBookScreen},
  CreateActivity: {screen: CreateActivityScreen}
});

export default AppRouter;
