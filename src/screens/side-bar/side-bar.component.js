import React, { Component, PropTypes } from 'react';

import { Actions } from 'react-native-router-flux';

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

  static contextTypes = {
    closeDrawer: PropTypes.func.isRequired
  };

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
              source={require('../../img/placeholder.png')}
            />
          </View>

          <View style={styles.textView}>
            <Text style={styles.text1}>Murat Mutlu</Text>
            <Text style={styles.text2}>Graphic Designers</Text>
          </View>
        </View>

        <View style={styles.textView}>
          <View style={styles.sideView}>
            <Icon name="md-mail" style={styles.icon} />
            <Button transparent onPress={() => this.MyInvites()}>
              <Text style={styles.text4}>Convites de Colaboração</Text>
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
