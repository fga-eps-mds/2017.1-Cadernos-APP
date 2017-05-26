import React, { Component, PropTypes } from 'react';

import { Actions } from 'react-native-router-flux';

import {
  Container,
  Content,
  View,
  List,
  ListItem,
  Text,
  Button,
  Spinner,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Icon
} from 'native-base';

import { Image } from 'react-native';

import styles from './list-books.styles';

import GoBack from '../go-back/go-back.component';

export default class ListBooksComponent extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    isVisitor: PropTypes.bool.isRequired,
    onBookSelected: PropTypes.func.isRequired
  }

  renderBookListItem(book) {
    return (
      <ListItem
        key={`BOOK:${book.id}`}
        onPress={() => this.props.onBookSelected(book)}
      >

        <Card style={styles.bookCard}>
          <CardItem cardBody style={styles.bookCardItem}>
            <Image
              source={{ uri: book.coverOriginal }}
              style={styles.bookCardImage}
            />
          </CardItem>

          <CardItem style={styles.bookCardItem}>
            <Text style={styles.title}>{book.title}</Text>
            <View style={styles.containerIcon}>
              <Icon style={styles.mdPaper} name='md-paper' />
              <Icon style={styles.mdPeople} name='md-people' />

            </View>
          </CardItem>
        </Card>
      </ListItem>
    );
  }

  render() {
    const bookListItems = this.props.books.map(book => this.renderBookListItem(book));

    return (
      <Container style={styles.container}>
        <View style={styles.listView}>
          {this.props.books.length === 0 ?
            <Spinner />
            :
            <Content>
              <List>
                {bookListItems}
              </List>
            </Content>
          }
        </View>
      </Container>
    );
  }
}
