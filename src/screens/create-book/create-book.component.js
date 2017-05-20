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
} from 'native-base';

import { KeyboardAvoidingView, Alert } from 'react-native';

import styles from './create-book.styles';
import ListErrors from '../../components/list-errors/list-errors.component';
import GoBack from '../../components/go-back/go-back.component';

export default class CreateBookComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    }
  }

  componentDidMount() {
    this.props.clearSelectedBook();
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleFieldOnChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  getBookData() {
    return {
      title: this.state.title,
      loggedUserId: this.props.user.id
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <GoBack />

        <KeyboardAvoidingView behavior="padding" style={styles.wrapperForm}>
          <Item regular style={styles.formItem}>
            <Input
              placeholder='Titulo'
              returnKeyType='next'
              onChangeText={(text) => this.handleFieldOnChange('title', text)}
              value={this.state.title}
            />
          </Item>

          <ListErrors errors={this.props.book.errors.title} />
        </KeyboardAvoidingView>

        <View style={{ flex: 1 }}>
          {this.props.book.sendingData ?
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