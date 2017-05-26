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
  ProfileScreen
} from '../../screens';

import { EventEmitter } from 'fbemitter';
import SideBar from '../../screens/side-bar/side-bar.component'
import Drawer from 'react-native-drawer';
import NavigationDrawer from '../app-drawer/app-drawer.component';

let _emitter = new EventEmitter();

export default class App extends Component {
  componentDidMount() {
    var self = this;

    _emitter.addListener('openMenu', () => {
      self._drawer.open();
    });

    _emitter.addListener('back', () => {
      self._navigator.pop();
    });
  }


  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={<SideBar />}
        tapToClose
        openDrawerOffset={0.2}
        panOpenMask={0.2}
        panCloseMask={0.2}
        negotiatePan
        tweenHandler={(ratio) => ({
          main: { opacity: Math.max(0.54, 1 - ratio) },
        })}
      >
        <Router hideNavBar={true}>
          <Scene key='PreLogin'>
            <Scene key="Main" component={MainScreen} initial />
            <Scene key="CreateUser" component={CreateUserScreen} />
            <Scene key="UserLogin" component={UserLoginScreen} />



            <Scene key="Home" component={HomeScreen} />
            <Scene key="Profile" component={ProfileScreen} />
            <Scene key="EditUser" component={EditUserScreen} />
            <Scene key="CreateBook" component={CreateBookScreen} />
            <Scene key="ViewBook" component={ViewBookScreen} />
            <Scene key="EditBook" component={EditBookScreen} />
          </Scene>
        </Router>
      </Drawer>

    );
  }
}