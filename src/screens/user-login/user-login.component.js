import React, { Component } from 'react';

import { Actions } from 'react-native-router-flux';

import {
  Text,
  View,
  Container,
  Content,
  H1,
  Item,
  Input,
  Button,
  Spinner,
  ListItem,
  CheckBox
} from 'native-base';

import styles from './user-login.styles';
import commonStyle from '../../styles/common.styles';

import InputErrorDisplay from '../../components/input-error-display/input-error-display.component';
import GoBack from '../../components/go-back/go-back.component';

export default class UserLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      remember: true
    }
  }

  handleFieldOnChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  componentDidMount() {
    if (this.props.exitUser) {
      this.props.userLogout();
    }

    this.props.cleanUserErrors();

    this.setState({
      email: this.props.email,
      password: this.props.password,
      remember: this.props.rememberLogin
    });
  }

  getUserData() {
    const data = {
      user: {
        email: this.state.email,
        password: this.state.password,
        isVisitor: false
      },

      login: {
        remember: this.state.remember
      }
    }

    return data;
  }

  render() {
    return (
      <Container style={styles.container}>
        <GoBack />

        <View style={styles.wrapperTitle}>
          <H1 style={styles.title}>ENTRE</H1>
          <Text>Prazer em te receber novamente. Seja bem-vindo!</Text>
        </View>

        <View style={styles.wrapperForm}>
          <Item regular style={styles.formItem}>
            <Input
              placeholder='Seu e-mail'
              onChangeText={(text) => this.handleFieldOnChange('email', text)}
              value={this.state.email}
            />
          </Item>

          <Item regular style={styles.formItem}>
            <Input
              secureTextEntry
              placeholder='Sua senha'
              onChangeText={(text) => this.handleFieldOnChange('password', text)}
              value={this.state.password}
            />
          </Item>

          {this.props.errors.error ?
            <InputErrorDisplay userLoginErrors={this.props.errors.error.user_authentication} />
            :
            null
          }
        </View>

        <View style={{ flex: 1 }}>
          <ListItem onPress={() => this.handleFieldOnChange('remember', !this.state.remember)}>
            <CheckBox checked={this.state.remember} />
            <Text style={{marginLeft: 10}}>Lembrar email e senha</Text>
          </ListItem>
        </View>

        <View style={{ flex: 1 }}>
          {this.props.sendingData ?
            <Spinner />
            :
            <Button warning block style={commonStyle.call_to_action}
              onPress={() => this.props.userLogin(this.getUserData())}
            >
              <Text>ENTRAR</Text>
            </Button>
          }
        </View>

        <View style={{ flex: 1 }}>
          {this.props.sendingData ?
            <Content />
            :
            <Button warning bordered block style={commonStyle.call_to_action__negative}
              onPress={() => this.props.enterAsVisitor()}
            >
              <Text style={commonStyle.call_to_action_text__negative}>ENTRAR COMO VISITANTE</Text>
            </Button>
          }
        </View>
      </Container>
    );
  }
}
