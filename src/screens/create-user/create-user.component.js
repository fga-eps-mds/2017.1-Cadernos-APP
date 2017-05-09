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

          <Item regular style={styles.formItem}>
            <Input
              placeholder='Seu e-mail'
              onChangeText={(text) => this.handleFieldOnChange('email', text)}
              value={this.state.email}
            />
          </Item>

          <Item regular style={styles.formItem}>
            <Input
              placeholder='Sua senha'
              onChangeText={(text) => this.handleFieldOnChange('password', text)}
              value={this.state.password}
            />
          </Item>
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
            {this.props.errors && this.props.errors.name ? // Need to do others errors
              <Text>{this.props.errors.name}</Text>        // create another component to call this logic function
              :
              <Text>{''}</Text>
            }
          </View>
      </Container>
    );
  }
}
