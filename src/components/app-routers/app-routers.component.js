import React, { Component } from 'react';

import {Scene, Router} from 'react-native-router-flux';

import Main from '../../screens/main/main.component';
import CreateUser from '../../screens/create-user/create-user.component';


export default class AppRouters extends Component {
  render() {
    return (
        <Router>
            <Scene key="Main" component={Main} title="Main" initial />
            <Scene key="CreateUser" component={CreateUser} title="CreateUser"/>
        </Router>
    );
  }
}
