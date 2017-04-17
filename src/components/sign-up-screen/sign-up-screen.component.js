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
  InputGroup,
  Label,
  Toast,
  Spinner,
  Icon
} from "native-base";

import { If, Choose, When } from 'jsx-control-statements';

import { StyleSheet } from 'react-native';

import { Actions, ActionConst } from 'react-native-router-flux';

import { styles } from './sign-up-screen.style';

import { GoBack } from '../go-back';

import axios, { setAuthorizationToken } from '../../config/axios';

export class SignUpScreenComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      sendingData: false,
    }
  }

  inputValueChanged(field, value) {
    this.setState({
      [field]: value
    });
  }

  displayToast(text) {
    Toast.show({
      text,
      position: 'bottom',
      buttonText: 'Okay'
    });
  }

  isFormValid() {
    if (this.state.name.trim().length === 0) {
      this.displayToast('Preencha o campo nome');
      return false;
    }

    if (this.state.email.trim().length === 0) {
      this.displayToast('Preencha o campo email');
      return false;
    }

    if (this.state.password.trim().length === 0) {
      this.displayToast('Preencha o campo senha');
      return false;
    }

    return true;
  }

  makeUserDataJSON() {
    const json = {
      user: {
        name: this.state.name,
        email: this.state.email,
        email_confirmation: this.state.email,
        password: this.state.password
      }
    };

    return json;
  }

  createUser() {
    if (this.isFormValid()) {
      this.setState({sendingData: true});
      this.props.clearErrors();

      this.props.createUser(this.makeUserDataJSON(), (success=false) => {
        this.setState({sendingData: false});

        if (success) {
          Actions.MainScreen({type: ActionConst.REPLACE});
        }
      });
    }
  }

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
              <Item floatingLabel error={this.props.errors.name != undefined}>
                <Label style={styles.label}>Seu Nome</Label>

                <Input
                  value={this.state.name}
                  onChangeText={(value) => this.inputValueChanged('name', value)}
                />

                <If condition={this.props.errors.name != undefined}>
                  <Icon name='ios-close-circle' />
                </If>
              </Item>
              <If condition={this.props.errors.name != undefined}>
                <Text>{this.props.errors.name}</Text>
              </If>

              <Item floatingLabel error={this.props.errors.email != undefined}>
                <Label style={styles.label}>Seu Email</Label>

                <Input
                  value={this.state.email}
                  onChangeText={(value) => this.inputValueChanged('email', value)}
                />

                <If condition={this.props.errors.email != undefined}>
                  <Icon name='ios-close-circle' />
                </If>
              </Item>
              <If condition={this.props.errors.email != undefined}>
                <Text>{this.props.errors.email}</Text>
              </If>

              <Item floatingLabel last error={this.props.errors.password != undefined}>
                <Label style={styles.label}>Senha</Label>
                <Input secureTextEntry
                  value={this.state.password}
                  onChangeText={(value) => this.inputValueChanged('password', value)}
                />

                <If condition={this.props.errors.password != undefined}>
                  <Icon name='ios-close-circle' />
                </If>
              </Item>
              <If condition={this.props.errors.password != undefined}>
                <Text>{this.props.errors.password}</Text>
              </If>

            </Form>

            <Choose>
              <When condition={this.state.sendingData === true}>
                <Spinner />
              </When>

              <When condition={this.state.sendingData === false}>
                <Button warning full rounded style={styles.button}
                  onPress={() => this.createUser()}
                >
                  <Text>CRIAR CONTA</Text>
                </Button>
              </When>
            </Choose>

          </Content>
        </View>

      </Container>
    );
  }
}
