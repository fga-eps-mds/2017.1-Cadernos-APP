import React, { Component, PropTypes } from 'react';

import {
  Container,
  Content,
  Button,
  Text,
  View,
  Item,
  Input
} from 'native-base';

import { Actions } from 'react-native-router-flux';
import GoBack from '../../components/go-back/go-back.component';

export default class InviteCollaborator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    }
  }
  handleFieldOnChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  getInfo() {
    const data = {
      sender_id: this.props.user.id,
      book_id: this.props.book.id,
      email: this.state.email
    }

    return data
  }

  render() {
    return (
      <Container>
        <GoBack />
        <Item regular>
          <Input
            onChangeText={(text) => this.handleFieldOnChange('email', text)}
            placeholder='E-mail do usuário'
            returnKeyType='next'
          />
        </Item>
        <Button bordered rounded small success
          onPress={() => this.props.createInvite(this.getInfo())}
          key="confirm-collaborator-button"
        >
          <Text>Convidar colaborador</Text>
        </Button>


      </Container>
    );
  }
}