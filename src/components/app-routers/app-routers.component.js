import React, { Component } from 'react';

import {
  StackNavigator,
} from 'react-navigation';

import MainScreen from '../../screens/main/main.component';
import CreateUserScreen from '../../screens/create-user/create-user.component';
import UserLoginScreen from '../../screens/user-login/user-login.component';

const AppRouters = StackNavigator({
  Main: {screen: MainScreen},
  CreateUser: {screen: CreateUserScreen},
  UserLogin: {screen: UserLoginScreen}
});

export default AppRouters;
