import React from 'react';

import { Actions } from 'react-native-router-flux';

import {
  Button,
  Text,
  View,
  Container
} from 'native-base';

import { getStoredUserLogin } from '../../device-storage/login';

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
      <Container>
        <View>
          <Button block onPress={() => Actions.UserLogin()}>
            <Text>Login</Text>
          </Button>
        </View>

        <View>
          <Button block onPress={() => Actions.CreateUser()}>
            <Text>Cadastro</Text>
          </Button>
        </View>
      </Container>
    );
  }
}