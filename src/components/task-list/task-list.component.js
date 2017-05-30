import React, { Component, PropTypes } from 'react';

import {
  Container,
  Content,
  View,
  Text,
  List,
  ListItem,
  Picker
} from 'native-base';

import { ListView } from 'react-native';

const { Item } = Picker;

import styles from './task-list.styles';

import TaskListItem from '../task-list-item/task-list-item.component';

export default class TaskList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      dataSource: ds.cloneWithRows([])
    };
  }

  static propTypes = {
    tasks: PropTypes.array.isRequired
  }

  componentWillReceiveProps(nextProps) {
    console.log("AQUUIIII");
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.tasks)
    });
  }

  render() {
    return (
      <Container>
        <View style={{ flex: 1}}>
          <Picker>
            <Item label="Caderno 01" />
            <Item label="Caderno 02" />
            <Item label="Caderno 03" />
          </Picker>
        </View>

        <View style={{ flex: 3}}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => (
              <TaskListItem task={rowData} />
            )}
            renderSeparator={
              (sectionId, rowId) => <View key={rowId} style={styles.divisor} />
            }
            enableEmptySections={true}
          />
        </View>
      </Container>
    );
  }
}
