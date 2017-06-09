import React from 'react';

import { Actions } from 'react-native-router-flux';

import {
  Button,
  Text,
  View,
  Container
} from 'native-base';

import { getStoredUserLogin } from '../../device-storage/login';
import styles from './main.styles';

export default class Main extends React.Component {

  componentDidMount() {
    if (this.props.rememberLogin) {
      getStoredUserLogin()
        .then(data => {
          this.props.setupUserLogin({ ...data });
        });
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <View>
          <Text style={styles.title}>
            CADERNOS
          </Text>
          <Text style={styles.subtitle}>GUARDANDO A HISTÓRIA DA ARTE</Text>
        </View>


          <Button style={styles.button} block onPress={() => Actions.UserLogin()}>
            <Text>LOGIN</Text>
          </Button>
          <Text style={{marginTop: 20}}>Não tem uma conta?</Text>
          <Button style={styles.button} block onPress={() => Actions.CreateUser()}>
            <Text>CADASTRO</Text>
          </Button>
      </Container>
    );
  }
}
