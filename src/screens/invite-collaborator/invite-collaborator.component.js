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

  handleFieldOnChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  render() {
    return (
      <Container>
        <GoBack />
        <Item regular>
          <Input
            placeholder='E-mail do usuário'
            returnKeyType='next'
          />
        </Item>
        <Button bordered rounded small success
          key="confirm-collaborator-button"
        >
          <Text>Convidar colaborador</Text>
        </Button>


      </Container>
    );
  }
}