import React from 'react';

import { Container, Text, Content, View } from 'native-base';

import styles from './my-tasks.styles';

import TaskList from '../../components/task-list/task-list.component';

export default class MyTasks extends React.Component {
  render() {
    <Container style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text>Minhas Tarefas</Text>
      </View>

      <View style={{ flex: 4 }}>
        <TaskList />
      </View>
    </Container>
  }
}
