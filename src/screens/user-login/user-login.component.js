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
  Spinner
} from 'native-base';

import styles from './user-login.styles';

import InputErrorDisplay from '../../components/input-error-display/input-error-display.component';
import GoBack from '../../components/go-back/go-back.component';

export default class UserLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleFieldOnChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  componentWillMount() {
    this.props.cleanUserErrors();
  }

  render() {
    if (this.props.authenticated) {

      return (
        <Container style={styles.container}>

          <View style={{ flex: 1 }}>
            {this.props.sendingData ?
              <Spinner />
              :
              <Button warning block style={{ borderRadius: 30 }}
                onPress={() => { this.props.userLogout(); this.handleFieldOnChange('email', ''); this.handleFieldOnChange('password', '') }}
              >
                <Text>SAIR</Text>
              </Button>
            }
          </View>


          {this.props.isVisitor ?
            <Container></Container>
          :
            <Button block onPress={() => Actions.EditUser()}>
              <Text>Editar Usuário</Text>
            </Button>
          }

           <Button block warning onPress={() => Actions.ListBooks()}>
            <Text>Ver cadernos</Text>
          </Button>
        </Container>
      );

    } else {

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
              <InputErrorDisplay errors={this.props.errors.error.user_authentication} />
              : null}
          </View>

          <View style={{ flex: 1 }}>
            {this.props.sendingData ?
              <Spinner />
              :
              <Button warning block style={{ borderRadius: 30 }}
                onPress={() => this.props.userLogin(this.state)}
              >
                <Text>ENTRAR</Text>
              </Button>
            }
          </View>
          <View style={{ flex: 1 }}>
            {this.props.sendingData ?
              <Container></Container>
              :
              <Button warning block style={{ borderRadius: 30 }}
                onPress={() => this.props.enterAsVisitor()}
              >
                <Text>ENTRAR COMO VISITANTE</Text>
              </Button>
            }
          </View>
        </Container>
      );
    }
  }
}