import React, { Component, PropTypes } from 'react';

import { Actions } from 'react-native-router-flux';

import { getBaseUrl } from '../../config/axios';

import {
  Container,
  Text,
  Button,
  View,
  Content,
  CardItem,
  Icon
} from 'native-base';

import { SharedFooter } from '../../components';
import { Image } from 'react-native';

import styles from './side-bar.styles';

export default class SideBar extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired
  }

  static contextTypes = {
    closeDrawer: PropTypes.func.isRequired
  };

  myTasks = () => {
    Actions.MyTasks();
  }

  MyInvites = () => {
    Actions.InviteList();
    this.context.closeDrawer();
  }

  EditUser = () => {
    Actions.EditUser();
    this.context.closeDrawer();
  }

  Exit = () => {
    Actions.Main();
    this.context.closeDrawer();
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.upperView}>
          <View style={styles.avatarView}>
            <Image
              style={styles.avatar}
              source={{uri: `${getBaseUrl()}${this.props.user.avatar_medium}`}}
            />
          </View>

          <View style={styles.textView}>
            <Text style={styles.text1}>{this.props.user.name}</Text>
          </View>
        </View>

        <View style={styles.Middleview}>
          <View style={styles.textView2}>
            <Icon name="md-book" />
            <Text style={styles.text4}>Meus Cadernos</Text>
          </View>

          <View style={styles.textView2}>
            <Icon name="md-clipboard" />
            <Button transparent onPress={this.myTasks}>
              <Text style={styles.text4}>Minhas Tarefas</Text>
            </Button>
          </View>

          <View style={styles.textView2}>
            <Icon name="md-mail" />
            <Button transparent onPress={() => this.MyInvites()}>
              <Text style={styles.text4}>Convites de colaboração</Text>
            </Button>
          </View>

        </View>

        <View style={styles.bottomView}>
          <View style={styles.sideView}>
            <Icon name="md-contact" style={styles.icon} />
            <Button transparent onPress={() => this.EditUser()}>
              <Text style={styles.text3}>Editar Perfil</Text>
            </Button>
          </View>
          <View style={styles.sideView}>
            <Icon name="md-exit" style={styles.icon} />
            <Button transparent onPress={() => this.Exit()}>
              <Text style={styles.text3}>Sair</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}
