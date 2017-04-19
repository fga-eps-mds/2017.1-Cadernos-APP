import React, { Component } from 'react';

import { StyleProvider, getTheme } from 'native-base';
import variables from '../../Themes/variables';

import { styles } from './app.style';

import { RouterWrapper } from '../router-wrapper';

export class AppComponent extends Component {

  componentDidMount() {
    this.props.getStoredUserLogin();
  }

  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <RouterWrapper />
      </StyleProvider>
    );
  }
}
