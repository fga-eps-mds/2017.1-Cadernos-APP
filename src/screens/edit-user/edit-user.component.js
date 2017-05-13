
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


import styles from './edit-user.styles';
import {ToastAndroid} from 'react-native'
import {InputErrorDisplay} from '../../components';

export default class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    }
  }

  CleanupErrors(){
    this.props.cleanUserErrors();
  }

  componentDidMount() {
    this.setState({
      name: this.props.name,
      email: this.props.email
    });
  }

  handleFieldOnChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  getUserData() {
    const userData = {
      ...this.state,
      id: this.props.id
    };

    return userData;
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.wrapperTitle}>
          <H1 style={styles.title}>Editar Usuário</H1>
          <Text>Espaço para mudança de dados</Text>
        </View>

        <InputErrorDisplay nameErrors = {this.props.errors.name} />
        <View style={styles.wrapperForm}>
          <Item regular style={styles.formItem}>
            <Input
              placeholder='Seu nome'
              onChangeText={(text) => this.handleFieldOnChange('name', text)}
              value={this.state.name}
            />
          </Item>

          <InputErrorDisplay emailErrors = {this.props.errors.email} />
          <Item regular style={styles.formItem}>
            <Input
              placeholder='Seu e-mail'
              onChangeText={(text) => this.handleFieldOnChange('email', text)}
              value={this.state.email}
            />
          </Item>

          <InputErrorDisplay passwordErrors = {this.props.errors.password} />
          <Item regular style={styles.formItem}>
            <Input
              secureTextEntry
              placeholder='Confirme sua senha'
              onChangeText={(text) => this.handleFieldOnChange('password', text)}
              value={this.state.password}
            />
          </Item>
        </View>

        <View style={{ flex: 1 }}>
          {this.props.sendingData ?
            <Spinner />
            :
            <Button warning block
              onPress={
                () => {
                  this.props.editUser(this.getUserData())
                  setTimeout(() => {
                      console.log(this.props.isUpdated)

                      if (this.props.isUpdated == true) {
                        ToastAndroid.show('Usuário atualizado com sucesso!', ToastAndroid.LONG)
                        this.props.cleanUserErrors();
                      } else {
                        ToastAndroid.show('Ops... algo deu errado!', ToastAndroid.LONG)
                      }
                  }, 1500)
                }
              }
            >
              <Text>Salvar Dados</Text>
            </Button>
          }

        </View>
      </Container>
    );
  }
}
