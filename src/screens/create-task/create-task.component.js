import React, { Component } from 'react';
import {
  Text,
  View,
  Container,
  Content,
  H1,
  Item,
  Input,
  Button,
  Spinner,
} from 'native-base';

import { KeyboardAvoidingView, Alert } from 'react-native';

import styles from './create-task.styles';
import ListErrors from '../../components/list-errors/list-errors.component';

export default class CreateTaskComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: ''
    }
  }

  componentDidMount() {
    this.setState({
      title: this.props.task.title,
      content: this.props.task.content
    });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleFieldOnChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  getTaskData() {
    return {
      title: this.state.title,
      content: this.state.content,
      loggedUserId: this.props.loggedUserId,
      selectedBookId: this.props.book.id
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.wrapperForm}>
          <Item regular style={styles.formItem}>
            <Input
              placeholder='Titulo Da Atividade'
              returnKeyType='next'
              onChangeText={(text) => this.handleFieldOnChange('title', text)}
              value={this.state.title}

            />

          </Item>
          <ListErrors errors={this.props.task.errors.title} />

          <Item regular style={styles.formItem}>
            <Input
              placeholder='Descrição'
              returnKeyType='next'
              onChangeText={(text) => this.handleFieldOnChange('content', text)}
              value={this.state.content}
            />
          </Item>
          <ListErrors errors={this.props.task.errors.content} />

        </KeyboardAvoidingView>

        <View style={{ flex: 1 }}>
          {this.props.task.sendingData ?
            <Spinner />
            :
            <Button warning block style={{ borderRadius: 30 }}
              onPress={() => this.props.createTask(this.getTaskData())}
            >
              <Text>Adicionar Atividade</Text>
            </Button>
          }
        </View>
      </Container>
    );
  }
}
