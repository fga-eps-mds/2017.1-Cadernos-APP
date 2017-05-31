import React, { Component } from 'react';

import {
  Container,
  Content,
  List,
  ListItem,
  Button,
  Text,
  View
} from 'native-base';

import {
  Image, Alert
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const imageUrlMock = "http://68.media.tumblr.com/57995a853ed4ca881e6053e7e14ec21b/tumblr_mjb683SkIO1qbgtxfo1_500.gif";

import GoBack from "../../components/go-back/go-back.component";

export default class ViewTask extends Component {

  getUserConfirmation() {
    Alert.alert(
      'ATENÇÃO',
      'Tem certeza que deseja deletar essa atividade ?',
      [
        {text: 'Não', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Sim', onPress: () => this.props.deleteTask(this.props.task)},
      ],
      { cancelable: false } )
  }

  render() {
    const { id, bookId, user, title, content } = this.props.task;

    return (
      <Container style={{ flex: 1, padding: 5 }}>
        <GoBack />

        <View style={{ flex: 2 }}>
          <View>
            <Text>{title}</Text>
          </View>

          <View>
            <Text>Tarefa de: {user.name}</Text>
          </View>

          <View>
            <Text>
              {this.props.task.content}
            </Text>
          </View>
        </View>

        <View style={{ flex: 1, marginTop: 5 }}>
          <Button bordered warning block
            onPress={() => Actions.EditTask({task: this.props.task})}
          >
            <Text>Editar dados</Text>
          </Button>

          <Button bordered danger block
            onPress={() => this.getUserConfirmation()}
          >
            <Text>Excluir</Text>
          </Button>
        </View>
      </Container>
    );
  }
}
