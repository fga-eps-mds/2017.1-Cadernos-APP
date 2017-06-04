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


export default class InviteList extends Component {

  handleFieldOnChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  render() {
    return (
      <Container style={{flex: 1}}>
        <NavigationHeader style={{flex: 1}}
          title={"Meus convites"}
          displayGoBack={true} />
        <List style={{flex: 6}}>
          <ListItem>
            <Text>Convite 1</Text>
          </ListItem>
          <ListItem>
            <Text>Convite 2</Text>
          </ListItem>
          <ListItem>
            <Text>Convite 3</Text>
          </ListItem>
          <ListItem>
            <Text>Convite 4</Text>
          </ListItem>
        </List>


      </Container>
    );
  }
}