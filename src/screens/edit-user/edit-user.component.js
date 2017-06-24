
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
  Image
} from 'native-base';

import ImagePicker from '../../components/image-picker/image-picker.component';
import { getBaseUrl } from '../../config/axios';

import styles from './edit-user.styles';
import { ToastAndroid } from 'react-native'
import { InputErrorDisplay, GoBack } from '../../components';

export default class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    }
  }

  CleanupErrors() {
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
        <GoBack />
        {/*
        <View style={styles.wrapperTitle}>
          <H1 style={styles.title}>Editar Usuário</H1>
          <Text>Espaço para mudança de dados</Text>
        </View>
        */}

        <View style={{ flex: 5 }}>
        <Content>
          <View style={{...styles.wrapperTitle, marginBottom: 10}}>
            <H1 style={styles.title}>Editar Usuário</H1>
            <Text>Espaço para mudança de dados</Text>
          </View>

          <InputErrorDisplay nameErrors={this.props.errors.name} />
          <Item regular style={styles.formItem}>
            <Input
              placeholder='Seu nome'
              onChangeText={(text) => this.handleFieldOnChange('name', text)}
              value={this.state.name}
            />
          </Item>

          <InputErrorDisplay emailErrors={this.props.errors.email} />
          <Item regular style={styles.formItem}>
            <Input
              placeholder='Seu e-mail'
              onChangeText={(text) => this.handleFieldOnChange('email', text)}
              value={this.state.email}
            />
          </Item>

          <InputErrorDisplay passwordErrors={this.props.errors.password} />
          <Item regular style={styles.formItem}>
            <Input
              secureTextEntry
              placeholder='Confirme sua senha'
              onChangeText={(text) => this.handleFieldOnChange('password', text)}
              value={this.state.password}
            />
          </Item>

          <ImagePicker
            actualImageUrl={`${getBaseUrl()}${this.props.avatar}`}
            sendImageTo={(imageSource, imageBase64) => this.props.uploadUserAvatar(this.props.id, this.props.email, imageSource, imageBase64)}
          />

          {this.props.sendingData ?
            <Spinner />
            :
            <Button warning block
              onPress={() => this.props.editUser(this.getUserData())}
            >
              <Text>Salvar Dados</Text>
            </Button>
          }
        </Content>
        </View>
        {/*
        <View style={{ flex: 1 }}>
          {this.props.sendingData ?
            <Spinner />
            :
            <Button warning block
              onPress={() => this.props.editUser(this.getUserData())}
            >
              <Text>Salvar Dados</Text>
            </Button>
          }

        </View>
        */}
      </Container>
    );
  }
}
