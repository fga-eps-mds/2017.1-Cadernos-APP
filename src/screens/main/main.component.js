import React from 'react';

import { Actions } from 'react-native-router-flux';

import {
  Button,
  Text,
  View,
  Container
} from 'native-base';

export default class Main extends React.Component {

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