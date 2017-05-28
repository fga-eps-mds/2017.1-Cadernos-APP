import React from 'react';
import { Container, Text, Content} from 'native-base';

import styles from './my-tasks.styles';

import TaskList from '../../components/task-list/task-list.component';

export default class MyTasks extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Text>My tasks</Text>
        <TaskList />
      </Container>
  );
  }
}
