/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './src/components/app/app.component';

export default class ColaborArt extends Component {
  render() {
    return (
      <App />
    );
  }
}


AppRegistry.registerComponent('ColaborArt', () => ColaborArt);
