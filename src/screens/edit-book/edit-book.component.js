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
  componentWillMount() {
    const { params } = this.props.navigation.state;

    // Verify if the params has the book, otherwise just ignored it
    if (params && params.book && params.book.id > 0) {
      this.props.setSelectedBook(params.book);
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
          <Button block bordered warning >
            <Text>Confirmar</Text>
          </Button>
        </Content>

      </Container>
    );
  }
}