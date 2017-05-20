import React from 'react';

import { Actions } from 'react-native-router-flux';

import {
  Container,
  Content,
  Text,
  Button,
  Input,
  Item
} from 'native-base';

import styles from './edit-book.styles';

import { GoBack } from '../../components';

export default class EditBook extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: this.props.book.title,
    }
  }

  handleFieldOnChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <GoBack />

        <Item regular style={styles.formItem}>
          <Input
            placeholder='Nome do caderno'
            returnKeyType='next'
            onChangeText={(text) => this.handleFieldOnChange('title', text)}
            value={this.state.title}
          />
        </Item>
        <Content>
          <Button block bordered warning >
            <Text>Confirmar</Text>
          </Button>
        </Content>

      </Container>
    );
  }
}