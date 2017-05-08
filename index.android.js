/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import store from './src/config/store';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { App } from './src/components';

export default class ColaborArt extends Component {
  render() {
    return (
      <Provider store={store}>
      <App />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('ColaborArt', () => ColaborArt);
