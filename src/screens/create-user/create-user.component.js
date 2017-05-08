import React, { Component } from 'react';
import {
  Text,
  View,
  Container,
  Content,
  H1,
  Item,
  Input,
  Button
} from 'native-base';

import styles from './create-user.styles';

export default class CreateUser extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.wrapperTitle}>
          <H1 style={styles.title}>CADASTRE-SE</H1>
          <Text>Prazer em te conhecer. Seja bem-vindo!</Text>
        </View>

        <View style={styles.wrapperForm}>
          <Item regular style={styles.formItem}>
            <Input placeholder='Seu nome' />
          </Item>

          <Item regular style={styles.formItem}>
            <Input placeholder='Seu e-mail' />
          </Item>

          <Item regular style={styles.formItem}>
            <Input placeholder='Sua senha' />
          </Item>

          <Button warning block>
            <Text>CRIAR CONTA</Text>
          </Button>
        </View>
      </Container>
    );
  }
}
