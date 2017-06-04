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

  componentDidMount() {
    this.props.getInvites(this.props.user)
  }

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <NavigationHeader style={{ flex: 1 }}
          title={"Meus convites"}
          displayGoBack={true} />
        <List style={{ flex: 6 }}>
          {this.props.invites.map(invite => {
            return (
              <ListItem key={invite.id} >

                <Text>{invite.sender_name + " te enviou um convite para colaborar com " + invite.book_title}</Text>
              </ListItem>
            );
          })}
        </List>


      </Container>
    );
  }
}