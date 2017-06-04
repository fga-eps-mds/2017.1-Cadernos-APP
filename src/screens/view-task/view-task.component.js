import React, { Component } from 'react';

import {
  Container,
  Content,
  List,
  ListItem,
  Button,
  H1,
  Text,
  View
} from 'native-base';

import {
  Image, Alert, ScrollView
} from 'react-native';

import titleStyle from '../../global-styles/titles.styles';
import buttonStyle from '../../global-styles/button.styles';

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

        <View style={{ flex: 4 }}>
          <View>
             <H1 style={titleStyle.h1}>Nome da tarefa</H1>
             <Text>{title}</Text>
          </View>

          <View>
            <H1 style={titleStyle.h1}>Proprietário da tarefa</H1>
            <Text>{user.name}</Text>
          </View>

          <View>
            <H1 style={titleStyle.h1}>Conteudo</H1>
          </View>
          <ScrollView>
            <Text>
              {this.props.task.content}
            </Text>
          </ScrollView>
        </View>

        <View style={{ flex: 1, marginTop: 5 }}>
          <Button block style={{...buttonStyle.button, ...buttonStyle.default}}
            onPress={() => Actions.EditTask({task: this.props.task})}>
            <Text>Editar dados</Text>
          </Button>

          <Button block style={{...buttonStyle.button, ...buttonStyle.delete}}
            onPress={() => this.getUserConfirmation()}>
            <Text>Excluir</Text>
          </Button>
        </View>
      </Container>
    );
  }
}
