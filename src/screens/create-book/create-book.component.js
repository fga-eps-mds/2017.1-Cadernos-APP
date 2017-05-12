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
        <View style={styles.wrapperTitle}>
          <H1 style={styles.title}>Criar Caderno</H1>
        </View>

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