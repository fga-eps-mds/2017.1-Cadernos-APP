import React from 'react';

import { Container, Content} from 'native-base';

import styles from './my-tasks.styles';

import TaskList from '../../components/task-list/task-list.component';

export default class MyTasks extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <TaskList />
      </Container>
  );
  }
}
