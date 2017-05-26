import React, { Component, PropTypes } from 'react';

import {
  Container,
  Content,
  Button,
  Text,
  View
} from 'native-base';

import { Actions } from 'react-native-router-flux';
import styles from './home.styles';
import SharedFooter from '../../components/header/header.component';
import ListBooks from '../../components/list-books/list-books.component';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.handleBookSelected = this.handleBookSelected.bind(this);
  }

  static propTypes = {
    bookList: PropTypes.object.isRequired,
    isVisitor: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.fetchBooks();
  }

  handleBookSelected(book) {
    this.props.viewBook(book);
  }

  render() {
    return (

      <Container style={{ flex: 1 }}>
        <View>
          <SharedFooter
            activeTab='books'
            isVisitor = {false}
          />
        </View>
        <View style={{ flex: 8 }}>
          <ListBooks
            books={this.props.bookList.books}
            isVisitor={this.props.isVisitor}
            onBookSelected={this.handleBookSelected}
          />
        </View>



        {this.props.isVisitor ?
          null
          :
          <View style={{ flex: 1, padding: 5, justifyContent: 'center' }}>
            <Button block warning bordered small
              key="createBookActionButton"
              onPress={() => Actions.CreateBook()}
              style={styles.btn}>
              <Text style={styles.title}>Criar caderno</Text>
            </Button>
          </View>
        }


      </Container>
    );
  }
}