import React, { Component, PropTypes } from 'react';
import { Actions } from 'react-native-router-flux';

import {
  Container,
  Content,
  View,
  Text,
  List,
  ListItem,
  Picker,
  Button
} from 'native-base';

import { ListView } from 'react-native';

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
    tasks: PropTypes.array.isRequired,
    isVisitor: PropTypes.bool.isRequired,
    book: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.tasks)
    });
  }

  render() {
    return (
      <Container>
        <View style={{ flex: 1 }}>
          <Picker mode="dropdown">
            {this.props.categories.map(category => {
              return (
                <Picker.Item
                  label={category.name}
                  value={category.id}
                  key={category.name}
                />
              );
            })}
          </Picker>
        </View>

        <View style={{ flex: 3 }}>
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

        {this.props.isVisitor ?
          null
          :
          <View style={{ flex: 1, padding: 5, justifyContent: 'center' }}>
            <Button block warning bordered rounded small
              key="createBookActionButton"
              onPress={() => Actions.CreateTask({
                book: this.props.book,
                user: this.props.user,
              })}>
              <Text>Criar tarefa</Text>
            </Button>
          </View>
        }
      </Container>
    );
  }
}
