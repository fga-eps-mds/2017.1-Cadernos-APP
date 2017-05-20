import React from 'react';

import { Actions } from 'react-native-router-flux';

import {
  Container,
  Content,
  Text,
  Button,
  List,
  ListItem
} from 'native-base';

import styles from './view-book.styles';

import { GoBack } from '../../components';

export default class ViewBook extends React.Component {

  render() {
    return (
      <Container style={styles.container}>
        <GoBack />

        <Content>
          <Text>
            {this.props.book.title}
          </Text>
        </Content>

        <Button style={styles.btn} block bordered warning onPress={() => Actions.CreateTask()}>
          <Text>Adicionar Atividade</Text>
        </Button>

        <Button block bordered warning onPress={() => Actions.EditBook()}>
          <Text>Editar caderno</Text>
        </Button>
      </Container>
    );
  }
}
