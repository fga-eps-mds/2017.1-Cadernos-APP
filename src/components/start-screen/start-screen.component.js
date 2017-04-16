import React, { Component } from 'react';

import {
  Container,
  Content,
  Button,
  Text,
  View
} from "native-base";

import { Actions } from 'react-native-router-flux';

import { StyleSheet } from 'react-native';

import { styles } from './start-screen.style';

export class StartScreenComponent extends Component {
  render() {
    return (
      <Container style={styles.mainContent}>

        <View style={styles.topContent}>
          <Text style={StyleSheet.flatten([styles.text, styles.title])}>CADERNOS</Text>
          <Text style={styles.text}>GUARDANDO A HISTÓRIA DA ARTE</Text>
        </View>

        <View style={styles.bottomContent}>
          <Button warning full rounded style={styles.button}
            onPress={() => { Actions.SignInScreen() }}
          >
            <Text>Entrar</Text>
          </Button>

          <Text style={StyleSheet.flatten([styles.text, styles.textBetweenButtons])}>Não tem uma conta ?</Text>

          <Button warning full rounded bordered style={styles.button}
            onPress={() => { Actions.SignUpScreen() }}
          >
            <Text>Cadastre-se</Text>
          </Button>
        </View>

      </Container>
    );
  }
}
