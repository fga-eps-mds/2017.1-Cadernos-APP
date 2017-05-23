import React, { Component, PropTypes } from 'react';

import {
  Container,
  Content,
  Button,
  Text,
  View
} from 'native-base';

import { Actions } from 'react-native-router-flux';

import SharedFooter from '../../components/shared-footer/shared-footer.component';
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
      <Container style={{flex: 1}}>
        <View style={{flex: 8}}>
          <ListBooks
            books={this.props.bookList.books}
            isVisitor={this.props.isVisitor}
            onBookSelected={this.handleBookSelected}
          />
        </View>

        {this.props.isVisitor ?
          null
        :
          <View style={{flex: 1, padding: 5, justifyContent: 'center'}}>
            <Button block warning bordered rounded small
              key="createBookActionButton"
              onPress={() => Actions.CreateBook()}
            >
              <Text>Criar caderno</Text>
            </Button>
          </View>
        }

        <View style={{flex: 1}}>
          <SharedFooter
            activeTab="books"
            isVisitor={this.props.isVisitor}
          />
        </View>
      </Container>
    );
  }
}