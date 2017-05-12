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
  Spinner,
  Alert
} from 'native-base';

import styles from './create-book.styles';
import { KeyboardAvoidingView, ScrollView } from 'react-native'
import { InputErrorDisplay } from '../../components';

export default class CreateBookComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    }
  }

  static navigationOptions = {
    title: 'Criar Caderno'
  };

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    console.log('VAI ATUALIZAR !');
    console.log(nextProps);
    const { goBack } = this.props.navigation;

    if (this.props.created === true || nextProps.created === true) {
      console.log('Alerta !');
      Alert.alert(
        'Criado com sucesso',
        '',
        {text: 'OK', onPress: () => goBack()},
        { cancelable: false }
      );
    } else {
      console.log('Não alerta não !', this.props.created, nextProps.created);
    }
  }

  handleFieldOnChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  getBookData() {
    return {
      title: this.state.title,
      loggedUserId: this.props.loggedUserId
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.wrapperForm}>
          <Item regular style={styles.formItem}>
            <Input
              placeholder='Titulo'
              returnKeyType='next'
              onChangeText={(text) => this.handleFieldOnChange('title', text)}
              value={this.state.title}
            />
          </Item>

          <InputErrorDisplay errors={this.props.errors.title} />
        </KeyboardAvoidingView>

        <View style={{ flex: 1 }}>
          {this.props.sendingData ?
            <Spinner />
            :
            <Button warning block style={{ borderRadius: 30 }}
              onPress={() => this.props.createBook(this.getBookData())}
            >
              <Text>CRIAR</Text>
            </Button>
          }
        </View>
      </Container>
    );
  }
}