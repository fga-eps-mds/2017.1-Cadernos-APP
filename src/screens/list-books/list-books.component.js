import React, { Component } from 'react';

import {
  Container,
  Content,
  View,
  List,
  ListItem,
  Text,
  Button,
  Spinner,
  Card, CardItem, Thumbnail, Left, Icon
} from 'native-base';

import { Image } from 'react-native';

import styles from './list-books.styles';

export default class ListBooksComponent extends Component {
  static navigationOptions = {
    title: 'Cadernos'
  };


  componentDidMount() {
    this.props.fetchBooks();
  }

  renderBookListItem(book) {
    const { navigate } = this.props.navigation;

    return (
      <ListItem
        key={book.id}
        onPress={() => navigate('ViewBook', { book })}
      >

        <Card style={styles.bookCard}>
          <CardItem cardBody style={styles.bookCardItem}>
            <Image
              source={{uri: book.cover}}
              style={styles.bookCardImage}
            />
          </CardItem>

          <CardItem style={styles.bookCardItem}>
            <Text>{book.title}</Text>
          </CardItem>
        </Card>
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
            <Content>
              <List>
                {bookListItems}
              </List>
            </Content>
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
