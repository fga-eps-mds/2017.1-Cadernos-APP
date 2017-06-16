import React, { Component, PropTypes } from 'react';

import { View } from 'native-base';

import Navigation from '../../components/navigation-header/navigation-header.component';
import ListErrors from '../../components/list-errors/list-errors.component';
import HandNote from '../../components/hand-note/hand-note.component';
import { Dimensions } from 'react-native';

export default class CreateTask extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <HandNote />
      </View>
    );
  }
}