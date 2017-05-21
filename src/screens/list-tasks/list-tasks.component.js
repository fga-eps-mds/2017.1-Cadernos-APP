import React, { Component } from 'react';

import {
  Container,
  Content,
  View,
  List,
  ListItem,
  Text,
  Button,
  Spinner
} from 'native-base';

import styles from './list-tasks.styles';

export default class ListTasksComponent extends Component {
  static navigationOptions = {
    title: 'Cadernos'
  };

  componentDidMount() {
    this.props.fetchTasks();
  }

  renderTaskListItem(task) {
    const { navigate } = this.props.navigation;

    return (
      <ListItem
        key={task.id}
        onPress={() => navigate()}
      >
        <Text>
          {task.title}
        </Text>
      </ListItem>
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    const taskListItems = this.props.tasks.map(task => this.renderTaskListItem(task));

    return (
      <Container style={styles.container}>
        <View style={styles.listView}>
          {this.props.sendingData ?
            <Spinner />
          :
            <Content>
              <List>
                {taskListItems}
              </List>
            </Content>
          }
        </View>

        <View style={styles.buttonView}>
          <Button block bordered warning
            onPress={() => navigate('ViewBook')}
          >
            <Text>Voltar</Text>
          </Button>
        </View>
      </Container>
    );
  }
}
