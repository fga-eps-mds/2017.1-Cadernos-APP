import React, { Component } from 'react';

import {
  Container,
  Content,
  List,
  ListItem,
  Button,
  H1,
  Text,
  View,
  Thumbnail,
  CardItem,
  Card,
  Icon
} from 'native-base';

import {
  Image, Alert, ScrollView, WebView
} from 'react-native';

import styles from './view-task.styles';

import titleStyle from '../../global-styles/titles.styles';
import buttonStyle from '../../global-styles/button.styles';
import axios, { getBaseUrl } from '../../config/axios'
import { Actions } from 'react-native-router-flux';
import ImagePicker from '../../components/image-picker/image-picker.component';

const imageUrlMock = "http://68.media.tumblr.com/57995a853ed4ca881e6053e7e14ec21b/tumblr_mjb683SkIO1qbgtxfo1_500.gif";

import GoBack from "../../components/go-back/go-back.component";

export default class ViewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: false
    }
  }
  getUserConfirmation() {
    Alert.alert(
      'ATENÇÃO',
      'Tem certeza que deseja deletar essa atividade ?',
      [
        { text: 'Não', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'Sim', onPress: () => this.props.deleteTask(this.props.task) }
      ],
      { cancelable: false })
  }



  render() {
    const { id, bookId, user, title, content } = this.props.task;

    return (
      <Container style={{ flex: 1, paddingHorizontal: 5 }}>
        <GoBack />

        {!this.state.showImage ?
          <Content style={{ flex: 5 }}>
            <View style={{}}>

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
              <View style={{ marginBottom: 10 }}>
                <Text>
                  {this.props.task.content}
                </Text>
              </View>
              {!this.state.showImage ?
                <View style={{ paddingTop: 10 }}>
                  <Button rounded warning small block style={{ marginBottom: '2%', width: '70%', alignSelf: 'center' }}

                    onPress={() => {
                      this.setState({ showImage: true });
                    }
                    }>
                    <Text>Mostrar imagem</Text>
                  </Button>
                </View>
                :
                null
              }
            </View>
          </Content>
          :
          null
        }
        {this.state.showImage ?
          <Container style={{ flex: 5 }}>
            <View>
              <Button rounded warning small block style={{ marginBottom: '2%', width: '70%', alignSelf: 'center' }}

                onPress={() => {
                  this.setState({ showImage: false });
                }
                }>
                <Text>Esconder imagem</Text>
              </Button>
            </View>
            <Container style={{ borderWidth: 2, borderColor: 'black', borderRadius: 10 }}>

              <WebView
                style={{ margin: 5 }}
                source={{ uri: `${getBaseUrl()}${this.props.task.picture_original}` }}
              />
            </Container>
          </Container>
          :
          null}
        <View style={{ paddingTop: 10 }}>
          <Button rounded warning small block style={{ marginBottom: '2%', width: '70%', alignSelf: 'center' }}
            key="gotoEditTaskButton"

            onPress={() => this.props.goToEditTask(this.props.task)}>
            <Text>Editar dados</Text>
          </Button>

          <Button rounded danger small block style={{ alignSelf: 'center', width: '70%' }}
            key="getUserConfirmationButton"
            onPress={() => this.getUserConfirmation()}>

            <Text>Excluir</Text>
          </Button>
        </View>



      </Container>
    );
  }

}
