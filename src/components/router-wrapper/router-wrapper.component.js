import React from 'react';

import {Scene, Router} from 'react-native-router-flux';
import { View } from 'native-base';

import { StartScreen } from '../start-screen';
import { SignUpScreen } from '../sign-up-screen';
import { SignInScreen } from '../sign-in-screen';
import { MainScreen } from '../main-screen';

export const RouterWrapper = () => (
  <Router>
    <Scene key="StartScreen" component={StartScreen} title="Cadernos" hideNavBar  initial />
    <Scene key="SignUpScreen" component={SignUpScreen} title='Sign Up' />
    <Scene key="SignInScreen" component={SignInScreen} title='Sign In' />
    <Scene key="MainScreen" component={MainScreen} title='Home' />
  </Router>
);
