import React, { Component, PropTypes } from 'react';

import {
  Container,
  Content,
  Button,
  Text,
  View,
  List,
  ListItem,
  Card,
  CardItem
} from 'native-base';

import { Actions } from 'react-native-router-flux';

import buttonStyle from '../../global-styles/button.styles';

import SharedFooter from '../../components/shared-footer/shared-footer.container';
import ListBooks from '../../components/list-books/list-books.component';
import NavigationHeader from '../../components/navigation-header/navigation-header.component';

export default class InspirationSearchList extends Component {
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

  getInspirationData(selectedBook) {
    return data = {
      primary: this.props.primary,
      inspirational: selectedBook
    }
  }

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <NavigationHeader
            title={"Adicionar Inspirações"}
            displayGoBack={true}
          />
        </View>

        <View style={{ flex: 8 }}>
          <Content>
            <List>
              {this.props.bookList.books.map(book => {
                return (
                  <ListItem key={book.id} >
                    <Card>
                      <CardItem>
                        <Text>{book.title}</Text>
                      </CardItem>
                    </Card>
                    <View style={{ flexDirection: 'column' }}>
                      <Button
                        small
                        onPress={() => this.props.addInspiration(this.getInspirationData(book))}
                      >
                        <Text>+</Text>
                      </Button>
                    </View>
                  </ListItem>
                );
              })}
            </List>
          </Content>

        </View>

        <View style={{ flex: 1 }}>
          <SharedFooter
            activeTab="books"
            isVisitor={this.props.isVisitor}
          />
        </View>
      </Container>
    );
  }
}
