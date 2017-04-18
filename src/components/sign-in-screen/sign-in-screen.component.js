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
  CheckBox,
  Spinner,
  Toast
} from "native-base";

import { Actions, ActionConst } from 'react-native-router-flux';

import { Choose, When } from 'jsx-control-statements';

import { StyleSheet } from 'react-native';

import { styles } from './sign-in-screen.style';

import { GoBack } from '../go-back';

import { FloatingInput } from '../floating-input';

export class SignInScreenComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.error && nextProps.error.length > 0) {
      this.displayErrorMessage(nextProps.error);
    }
  }

  inputValueChanged(field, value) {
    this.setState({
      [field]: value
    });
  }

  validateFields() {
    if (this.state.email.length === 0) {
      this.displayErrorMessage("Preencha o campo email");
      return false;
    }

    if (this.state.password.length === 0) {
      this.displayErrorMessage("Preencha o campo senha");
      return false;
    }

    return true;
  }

  logUserIn() {
    if (!this.validateFields()) {
      return false;
    }

    const userJSON = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.toggleSendingData();

    this.props.logUserIn(userJSON, (success=false) => {
      if (success) {
        Actions.MainScreen({type: ActionConst.REPLACE});
      } else {
        this.props.toggleSendingData();
      }
    });
  }

  displayErrorMessage(message) {
    Toast.show({
      text: message,
      position: 'bottom',
      buttonText: 'Okay'
    });
  }

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

              <FloatingInput
                labelText={"Email"}
                value={this.state.email}
                inputChangeText={(value) => this.inputValueChanged('email', value)}
                style={{marginTop: 10}}
                labelStyle={styles.label}
              />

              <FloatingInput
                labelText={"Senha"}
                value={this.state.password}
                inputChangeText={(value) => this.inputValueChanged('password', value)}
                style={{marginTop: 10}}
                labelStyle={styles.label}
                secureText={true}
              />

              <ListItem onPress={() => this.props.toggleRememberLogin()}>
                <CheckBox checked={this.props.rememberLogin} />
                <Text style={{marginLeft: 10}}>Lembrar email e senha</Text>
              </ListItem>

            </Form>

            <Choose>
              <When condition={this.props.sendingData === true}>
                <Spinner />
              </When>

              <When condition={this.props.sendingData === false}>
                <Button warning full rounded style={styles.button}
                  onPress={() => this.logUserIn()}
                >
                  <Text>ENTRAR</Text>
                </Button>
              </When>
            </Choose>
          </Content>
        </View>

      </Container>
    );
  }
}
