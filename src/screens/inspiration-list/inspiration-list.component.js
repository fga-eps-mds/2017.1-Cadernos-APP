import React, { Component, PropTypes } from 'react';

import {
  Container,
  Content,
  Button,
  Text,
  View,
  Item,
  Input,
  List,
  ListItem
} from 'native-base';

import { Actions } from 'react-native-router-flux';

import NavigationHeader from '../../components/navigation-header/navigation-header.component';


export default class InspirationList extends Component {

  handleFieldOnChange(field, value) {
    this.setState({
      [field]: value
    });
  }
  render() {
    return (
      <Container style={{ flex: 1 }}>
        <NavigationHeader style={{ flex: 1 }}
          title={"Inspirações"}
          displayGoBack={true} />
        <List style={{ flex: 6 }}>
          <ListItem>
            <Text>Inspiração 1</Text>
          </ListItem>
          <ListItem>
            <Text>Inspiração 2</Text>
          </ListItem>
          <ListItem>
            <Text>Inspiração 3</Text>
          </ListItem>
          <ListItem>
            <Text>Inspiração 4</Text>
          </ListItem>
        </List>

        <Button
        onPress={() => Actions.InspirationSearchList()}
        //disabled={this.props.user.id !== this.props.book.userId}
        >
          <Text>Adicionar Inspirações</Text>
        </Button>

      </Container>
    );
  }
}