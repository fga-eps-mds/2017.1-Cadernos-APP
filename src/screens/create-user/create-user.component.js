import React, { Component } from 'react';
import {
  Text,
  View,
  Container,
  Content,
  H1,
  Item,
  Input,
  Button,
  Spinner
} from 'native-base';

import styles from './create-user.styles';
import { KeyboardAvoidingView, ScrollView, ToastAndroid } from 'react-native'
import { InputErrorDisplay } from '../../components';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    const { navigate } = this.props.navigation;

    if (this.props.isRegistered === false && nextProps.isRegistered === true) {
      console.log("props antigas:" + this.props.isRegistered + " // props novas:" + nextProps.isRegistered)
      this.props.cleanUserErrors();
      navigate('UserLogin');
    }
  }

  componentWillUnmount() {
    this.props.cleanUserErrors();
  }

  handleFieldOnChange(field, value) {
    this.setState({
      [field]: value
    });
  }


  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.wrapperTitle}>
          <H1 style={styles.title}>CADASTRE-SE</H1>
          <Text>Prazer em te conhecer. Seja bem-vindo!</Text>
        </View>

        <KeyboardAvoidingView behavior="padding" style={styles.wrapperForm}>
          <Item regular style={styles.formItem}>
            <Input
              placeholder='Seu nome'
              returnKeyType='next'
              onChangeText={(text) => this.handleFieldOnChange('name', text)}
              value={this.state.name}
            />
          </Item>

          <InputErrorDisplay nameErrors={this.props.errors.name} />

          <Item regular style={styles.formItem}>
            <Input
              placeholder='Seu e-mail'
              returnKeyType='next'
              keyboardType='email-address'
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(text) => this.handleFieldOnChange('email', text)}
              value={this.state.email}
            />
          </Item>

          <InputErrorDisplay emailErrors={this.props.errors.email} />


          <Item regular style={styles.formItem}>
            <Input
              secureTextEntry
              placeholder='Sua senha'
              returnKeyType='go'
              autoCorrect={false}
              onChangeText={(text) => this.handleFieldOnChange('password', text)}
              value={this.state.password}
            />
          </Item>

          <InputErrorDisplay passwordErrors={this.props.errors.password} />

        </KeyboardAvoidingView>

        <View style={{ flex: 1 }}>
          {this.props.sendingData ?
            <Spinner />
            :
            <Button warning block style={{ borderRadius: 30 }}
              onPress={() => { this.props.createUser(this.state) }}
            >
              <Text>CRIAR CONTA</Text>

            </Button>
          }




        </View>
      </Container>
    );
  }
}
