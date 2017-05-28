import React from 'react';

import { Actions } from 'react-native-router-flux';

import {
  Container,
  Content,
  Text,
  Button,
  Footer, FooterTab, Icon
} from 'native-base';

import {
  Image
} from 'react-native';

import styles from './view-book-base.styles';

import GoBack from '../../components/go-back/go-back.component';

export default class ViewBookBase extends React.Component {

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Image
            style={styles.image}
            source={{ uri: 'https://cadernos-api.herokuapp.com/images/original/missing.jpg' }}
          />
        </Content>
        <Footer >
          <FooterTab>
            <Button vertical>
              <Icon name="md-checkbox" />
              <Text>Tarefas</Text>
            </Button>
            <Button active vertical>
              <Icon name="md-people" />
              <Text>Colaboradores</Text>
            </Button>
            <Button vertical>
              <Icon active name="md-list" />
              <Text>Categorias</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}