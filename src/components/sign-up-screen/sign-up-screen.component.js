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

import { styles } from './sign-up-screen.style';

import { GoBack } from '../go-back';

export class SignUpScreenComponent extends Component {
  render() {
    return (
      <Container style={styles.mainWrapper}>

        <GoBack />

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
                <Label style={styles.label}>Seu Nome</Label>
                <Input />
              </Item>

              <Item floatingLabel>
                <Label style={styles.label}>Seu Email</Label>
                <Input />
              </Item>

              <Item floatingLabel last>
                <Label style={styles.label}>Senha</Label>
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
