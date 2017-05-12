import React, { Component } from 'react';

import {
  Container,
  View,
  List,
  ListItem,
  Text,
  Button,
  Spinner
} from 'native-base';

import styles from './list-books.styles';

export default class ListBooksComponent extends Component {
  static navigationOptions = {
    title: 'Cadernos'
  };

  componentDidMount() {
    this.props.fetchBooks();
  }

  renderBookListItem(book) {
    return (
      <ListItem key={book.id}>
        <Text>
          {book.title}
        </Text>
      </ListItem>
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    const bookListItems = this.props.books.map(book => this.renderBookListItem(book));

    return (
      <Container style={styles.container}>
        <View style={styles.listView}>
          {this.props.sendingData ?
            <Spinner />
          :
            <List>
              {bookListItems}
            </List>
          }
        </View>

        <View style={styles.buttonView}>
          <Button block bordered warning
            onPress={() => navigate('CreateBook')}
          >
            <Text>Criar caderno</Text>
          </Button>
        </View>
      </Container>
    );
  }
}