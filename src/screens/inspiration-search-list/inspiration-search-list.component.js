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
  CardItem,
  Icon
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
                  <ListItem key={book.id} style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>{book.title}</Text>
                      <Button
                        small
                        style={{backgroundColor: 'transparent'}}
                        onPress={() => this.props.addInspiration(this.getInspirationData(book))}
                      >
                        <Icon name='md-add' style={{color: '#27ae60'}}/>
                      </Button>

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
