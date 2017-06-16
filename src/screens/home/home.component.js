import React, { Component, PropTypes } from 'react';

import {
  Container,
  Content,
  Button,
  Text,
  View
} from 'native-base';

import { Actions } from 'react-native-router-flux';

import buttonStyle from '../../global-styles/button.styles';
import { KeyboardAvoidingView } from 'react-native'
import SharedFooter from '../../components/shared-footer/shared-footer.container';
import ListBooks from '../../components/list-books/list-books.component';
import NavigationHeader from '../../components/navigation-header/navigation-header.component';

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
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <NavigationHeader
            title={"Meus cadernos"}
            displayGoBack={false}
          />
        </View>

        <View style={{ flex: 8 }}>
          <ListBooks
            books={this.props.bookList.books}
            isVisitor={this.props.isVisitor}
            onBookSelected={this.handleBookSelected} />
        </View>

        {this.props.isVisitor ?
          null
          :
          <View style={{ flex: 1, padding: 5, justifyContent: 'center' }}>
            <Button block rounded small warning style={{ backgroundColor: '#FFC513' }}
              key="createBookActionButton"
              onPress={() => Actions.CreateBook()}>
              <Text>Criar caderno</Text>
            </Button>
          </View>
        }

        <View style={{}}>
          <SharedFooter
            activeTab="books"
            isVisitor={this.props.isVisitor} />
        </View>
      </View>
    );
  }
}
