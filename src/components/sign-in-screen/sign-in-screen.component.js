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
  Label,
  ListItem,
  CheckBox
} from "native-base";

import { Actions, ActionConst } from 'react-native-router-flux';

import { StyleSheet } from 'react-native';

import { styles } from './sign-in-screen.style';

import { GoBack } from '../go-back';

export class SignInScreenComponent extends Component {

  render() {
    return (
      <Container style={styles.mainWrapper}>

        <GoBack />

        <View style={styles.tittleWrapper}>
          <H1 style={StyleSheet.flatten([styles.text, styles.titleText])}>ENTRAR</H1>
          <Text style={StyleSheet.flatten([styles.text, styles.subTitleText])}>
            Feliz por te ver mais uma vez aqui
          </Text>
        </View>

        <View style={styles.formWrapper}>
          <Content>
            <Form>

              <Item floatingLabel>
                <Label style={styles.label}>Seu Email</Label>
                <Input />
              </Item>

              <Item floatingLabel>
                <Label style={styles.label}>Senha</Label>
                <Input secureTextEntry/>
              </Item>

              <ListItem onPress={() => this.props.toggleRememberLogin()}>
                <CheckBox checked={this.props.rememberLogin} />
                <Text style={{marginLeft: 10}}>Lembrar email e senha</Text>
              </ListItem>

            </Form>

            <Button warning full rounded style={styles.button}
              onPress={() => { Actions.MainScreen({type: ActionConst.REPLACE}) }}
            >
              <Text>ENTRAR</Text>
            </Button>
          </Content>
        </View>

      </Container>
    );
  }
}
