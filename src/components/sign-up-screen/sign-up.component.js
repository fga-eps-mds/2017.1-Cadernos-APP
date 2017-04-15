import React, { Component } from 'react';

import {
  Container,
  Content,
  Button,
  Text,
  View,
  H1,
  Form,
  Item,
  Input,
  Label
} from "native-base";

import { StyleSheet } from 'react-native';

import { styles } from './sign-up.style';

export class SignUpComponent extends Component {
  render() {
    return (
      <Container style={styles.mainWrapper}>

        <View style={styles.tittleWrapper}>
          <H1 style={StyleSheet.flatten([styles.text, styles.titleText])}>CADASTRE-SE</H1>
          <Text style={StyleSheet.flatten([styles.text, styles.subTitleText])}>
            Prazer em te conhecer. Seja bem-vindo
          </Text>
        </View>

        <View style={styles.formWrapper}>
          <Content>
            <Form>
              <Item floatingLabel>
                <Label>Seu Nome</Label>
                <Input />
              </Item>

              <Item floatingLabel>
                <Label>Seu Email</Label>
                <Input />
              </Item>

              <Item floatingLabel last>
                <Label>Senha</Label>
                <Input secureTextEntry/>
              </Item>

            </Form>

            <Button warning full rounded style={styles.button}>
                <Text>CRIAR CONTA</Text>
            </Button>
          </Content>
        </View>

      </Container>
    );
  }
}
