import React, { Component } from 'react';

import {
  Container,
  Content,
  View,
  Text,
  List,
  ListItem,
  Picker
} from 'native-base';

import { ListView, StyleSheet } from 'react-native';

const { Item } = Picker;

import TaskListItem from '../task-list-item/task-list-item.component';

export default class TaskList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    const taskList = [
      {id: 1, title: "AAA", bookId: 1, user: {name: 'Fulano'}},
      {id: 2, title: "BBB", bookId: 1, user: {name: 'Fulano'}},
      {id: 3, title: "CCC", bookId: 1, user: {name: 'Fulano'}},
      {id: 4, title: "DDD", bookId: 1, user: {name: 'Fulano'}},
      {id: 5, title: "EEE", bookId: 1, user: {name: 'Fulano'}},
      {id: 6, title: "FFF", bookId: 1, user: {name: 'Fulano'}},
      {id: 8, title: "GGG", bookId: 1, user: {name: 'Fulano'}},
      {id: 9, title: "HHH", bookId: 1, user: {name: 'Fulano'}},
      {id: 10, title: "III", bookId: 1, user: {name: 'Fulano'}},
    ]

    this.state = {
      dataSource: ds.cloneWithRows(taskList)
    };
  }

  render() {
    return (
      <Container>
        <View style={{ flex: 1}}>
          <Picker>
            <Item label="Ola" />
            <Item label="Ola" />
            <Item label="Ola" />
          </Picker>
        </View>

        <View style={{ flex: 3}}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => (
              <TaskListItem
                task={rowData}
              />
            )}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={{flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: '#8E8E8E',}} />}
          />
        </View>
      </Container>
    );
  }
}
