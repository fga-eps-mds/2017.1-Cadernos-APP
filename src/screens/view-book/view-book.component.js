import React from 'react';

import { Actions } from 'react-native-router-flux';

import {
  Container,
  Content,
  Text,
  Button
} from 'native-base';

import styles from './view-book.styles';

import GoBack from '../../components/go-back/go-back.component';

export default class ViewBook extends React.Component {

  render() {
    return (
      <Container style={styles.container}>
        <GoBack />

        <Content>
          <Text style={styles.title}>
            {this.props.book.title}
          </Text>
        </Content>

        {this.props.isVisitor ?
          <Container></Container>
        :
          <Button block bordered warning onPress={() => Actions.EditBook()}>
            <Text>Editar caderno</Text>
          </Button>
        }
      </Container>
    );
  }
}