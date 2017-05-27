import React, { Component } from 'react';

import {
  Container,
  Text,
  View,
  Content,
  CardItem,
  Icon
} from 'native-base';

import { SharedFooter } from '../../components';
import { Image } from 'react-native';

import styles from './side-bar.styles';

export default class SideBar extends Component {

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

        <View style={styles.Middleview}>
          <View style={styles.textView2}>
            <Icon name="md-book" />
            <Text style={styles.text4}>Meus Cadernos</Text>
          </View>

          <View style={styles.textView2}>
            <Icon name="md-clipboard" />
            <Text style={styles.text4}>Minhas Tarefas</Text>
          </View>

          <View style={styles.textView2}>
            <Icon name="md-mail" />
            <Text style={styles.text4}>Convites de colaraboração</Text>
          </View>

        </View>

        <View style={styles.bottomView}>
          <View style={styles.sideView}>
            <Icon name="md-contact" style={styles.icon} />
            <Text style={styles.text3}>Editar perfil</Text>
          </View>
          <View style={styles.sideView}>
            <Icon name="md-exit" style={styles.icon} />
            <Text style={styles.text3}>Sair</Text>
          </View>
        </View>
      </Container>
    );
  }
}
