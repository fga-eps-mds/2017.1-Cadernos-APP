import React from 'react';

import {
  Container,
  Content,
  Text,
  Button,
  Input,
  Item
} from 'native-base';

import styles from './edit-book.styles';

export default class EditBook extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
    }
  }

  static navigationOptions = {
    title: 'Editar Caderno'
  };

  /**
   * If the book was just created, params will be undefined, but the selected book will
   * already be stored in the store.
   *
   * If the book was selected in a list or similar book selection, the selected book
   * will be passed by params. In this case, set the given book as the selected book
   * in the store.
   */

 componentWillReceiveProps(nextProps) {
    const { navigate } = this.props.navigation;
    const {goBack} = this.props.navigation;
    console.log(this.props.edited);
    console.log(nextProps.edited);
    // The book was just created
    if (this.props.edited === false && nextProps.edited === true) {
      //this.props.clearErrors();
      goBack();
    }
  }
  componentWillMount() {
    const { params } = this.props.navigation.state;

    // Verify if the params has the book, otherwise just ignored it
    if (params && params.book && params.book.id > 0) {
      this.props.setSelectedBook(params.book);
    }
  }

  getBookData() {
    return {
      title: this.state.title,
      userId: this.props.userId,
      bookId: this.props.id
    }
  }

  handleFieldOnChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  render() {
    return (
      <Container style={styles.container}>

        <Item regular style={styles.formItem}>
          <Input
            placeholder='Nome do caderno'
            returnKeyType='next'
            onChangeText={(text) => this.handleFieldOnChange('title', text)}
            value={this.state.title}
          />
        </Item>
        <Content>
          <Text>{"id do usuário: " + this.props.userId}</Text>
          <Text>{"id do livro:" + this.props.id}</Text>
          <Text>{"editado:" + this.props.edited}</Text>
          <Button block bordered warning
          onPress={() => this.props.EditBook(this.getBookData())}>
            <Text>Confirmar</Text>
          </Button>
        </Content>

      </Container>
    );
  }
}