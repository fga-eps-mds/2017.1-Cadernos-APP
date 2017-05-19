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
      description: ''
    }
  }

  static navigationOptions = {
    title: 'Adicionar Atividade'
  };

  componentWillReceiveProps(nextProps) {
    const { navigate } = this.props.navigation;


    if (this.props.created === false && nextProps.created === true) {
      this.props.clearErrors();
      navigate('Viewtasks');
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleFieldOnChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  gettaskData() {
    return {
      title: this.state.title,
      description: this.state.description,
      loggedUserId: this.props.loggedUserId
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

          <Item regular style={styles.formItem}>
            <Input
              placeholder='Descrição'
              returnKeyType='next'
              onChangeText={(text) => this.handleFieldOnChange('description', text)}
              value={this.state.description}
            />

          </Item>

          <ListErrors errors={this.props.errors.title} />
        </KeyboardAvoidingView>

        <View style={{ flex: 1 }}>
          {this.props.sendingData ?
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
