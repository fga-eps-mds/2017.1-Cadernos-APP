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
import UserErrors from '../../components/input-handler/input-handler.user-errors';

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

  handleFieldOnChange (field, value) {
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

        <View style={styles.wrapperForm}>
          <Item regular style={styles.formItem}>
            <Input
              placeholder='Seu nome'
              onChangeText={(text) => this.handleFieldOnChange('name', text)}
              value={this.state.name}
            />
          </Item>
          {this.props.errors.name ?
            <InputErrorDisplay errors={this.props.errors.name} />
          : null}

          <Item regular style={styles.formItem}>
            <Input
              placeholder='Seu e-mail'
              onChangeText={(text) => this.handleFieldOnChange('email', text)}
              value={this.state.email}
            />
          </Item>
          {this.props.errors.email ?
            <InputErrorDisplay errors={this.props.errors.email} />
          : null}

          <Item regular style={styles.formItem}>
            <Input
              placeholder='Sua senha'
              onChangeText={(text) => this.handleFieldOnChange('password', text)}
              value={this.state.password}
            />
          </Item>
          {this.props.errors.password ?
            <InputErrorDisplay errors={this.props.errors.password} />
          : null}
        </View>

        <View style={{flex: 1}}>
            {this.props.sendingData ?
              <Spinner />
            :
              <Button warning block
                onPress={() => this.props.createUser(this.state)}
              >
                <Text>CRIAR CONTA</Text>
              </Button>
            }

          <UserErrors errors = {this.props.errors} />

          </View>
      </Container>
    );
  }
}
