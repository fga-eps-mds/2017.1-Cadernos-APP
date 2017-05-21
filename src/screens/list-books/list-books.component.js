import React, { Component } from 'react';

import { Actions } from 'react-native-router-flux';

import {
  Container,
  Content,
  View,
  List,
  ListItem,
  Text,
  Button,
  Spinner
} from 'native-base';

import styles from './list-books.styles';

import GoBack from '../../components/go-back/go-back.component';

export default class ListBooksComponent extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  renderBookListItem(book) {
    return (
      <ListItem
        key={book.id}
        onPress={() => this.props.viewBook(book)}
      >
        <Text>
          {book.title}
        </Text>
      </ListItem>
    );
  }

  render() {
    const bookListItems = this.props.bookList.books.map(book => this.renderBookListItem(book));

    return (
      <Container style={styles.container}>
        <GoBack />

        <View style={styles.listView}>
          {this.props.bookList.sendingData ?
            <Spinner />
            :
            <Content>
              <List>
                {bookListItems}
              </List>
            </Content>
          }
        </View>

        <View style={styles.buttonView}>
          <Button block bordered warning
            onPress={() => this.props.goToCreateBook()}
          >
            <Text>Criar caderno</Text>
          </Button>
        </View>
      </Container>
    );
  }
}