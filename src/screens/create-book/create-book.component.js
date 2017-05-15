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
} from 'native-base';

import { KeyboardAvoidingView, Alert } from 'react-native';

import styles from './create-book.styles';
import ListErrors from '../../components/list-errors/list-errors.component';

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

  componentWillReceiveProps(nextProps) {
    const { navigate } = this.props.navigation;

    // The book was just created
    if (this.props.created === false && nextProps.created === true) {
      this.props.clearErrors();
      navigate('ViewBook');
    }
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

          <ListErrors errors={this.props.errors.title} />
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