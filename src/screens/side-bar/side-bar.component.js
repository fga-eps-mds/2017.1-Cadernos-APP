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


const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffd451'
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  avatarView: {
    alignItems: 'flex-end',
    margin: 10,
    marginTop: 20,
    flex: 1
  },
  upperView: {
    flex: 1,
    flexDirection: 'row-reverse',
    //backgroundColor: 'red',
  },
  Middleview: {
    flex: 2,
    marginLeft: 20
    //justifyContent: 'space-around'
  },
  textView: {
    alignItems: 'flex-start',
    margin: 10,
    marginTop: 40,
    marginLeft: 25,
    flex: 3
  },
  bottomView: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 25
  },
  sideView: {
    flex: 1,
    flexDirection: 'row'
  },
  text1: {
    margin: 1,
    color: 'white',
    fontSize: 14,
  },
  text2: {
    margin: 1,
    color: 'white',
    fontSize: 11,
    fontStyle: 'italic'
  },
  text3: {
    color: 'white',
    fontSize: 14,
    padding: 10,
  },
  icon: {
    marginTop: 7
  },
  text4: {
    color: 'white',
    fontSize: 14,
    marginLeft: 10,
    marginTop: 5
  },
  textView2:{
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row'
  }
};