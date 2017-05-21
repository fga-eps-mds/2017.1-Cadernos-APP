import React, { Component } from 'react';

import { Actions } from 'react-native-router-flux';


import {
  Container,
  Content,
  Text,
  Button,
  Input,
  Item
} from 'native-base';

import styles from './edit-book.styles';

import GoBack from '../../components/go-back/go-back.component';

export default class EditBook extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
    }
  }

  componentDidMount() {
    this.setState({ title: this.props.book.title });
  }

  handleFieldOnChange(field, value) {
    this.setState({
      [field]: value
    });
  }


  getBookData() {
    const book = {
      ...this.props.book,
      title: this.state.title
    }

    return book;
  }

  render() {
    return (
      <Container style={styles.container}>
        <GoBack />

        <Item regular style={styles.formItem}>
          <Input
            placeholder='Nome do caderno'
            returnKeyType='next'
            onChangeText={(text) => this.handleFieldOnChange('title', text)}
            value={this.state.title}
          />
        </Item>

        <Content>
          <Text>id do usuário: {this.props.book.userId}</Text>
          <Text>id do livro: {this.props.book.id}</Text>
          <Text>editado: {this.props.book.edited}</Text>
        </Content>

        <Content>
          <Button block bordered warning
            onPress={() => this.props.editBook(this.getBookData())}
          >
            <Text>Confirmar</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}