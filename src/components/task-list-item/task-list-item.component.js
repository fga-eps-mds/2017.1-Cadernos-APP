import React, { Component } from 'react';

import { Actions } from 'react-native-router-flux';

import {
  View,
  Text,
  Content
} from 'native-base';

import {
  TouchableOpacity
} from 'react-native';

export default class TaskListItem extends Component {
  render() {
    const { id, bookId, title } = this.props.task;

    return (
      <TouchableOpacity onPress={() => Actions.ViewTask({ task: this.props.task })}>
        <View key={`${bookId}:${id}`} style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 15 }}>
          <Text>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
