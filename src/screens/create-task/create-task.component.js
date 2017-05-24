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
  Select,
  Picker

} from 'native-base';

import { KeyboardAvoidingView, Alert } from 'react-native';
import GoBack from '../../components/go-back/go-back.component';

import styles from './create-task.styles';
import ListErrors from '../../components/list-errors/list-errors.component';

//import {ReactSelectize, SimpleSelect, MultiSelect} from 'react-selectize';


export default class CreateTaskComponent extends Component {
  constructor(props) {
    super(props);
    data = ['Categoria','Criação', 'Experimento', 'Teórico'];
    this.state = {
      title: '',
      content: '',
      category_id: '',
      selected: 'Cate'
    }


}
renderItem(){
  itens = [];
  for(let item of data){
    itens.push(<Picker.Item key = {item} label = {item} value = {item}/>)
  }

  return itens;
}


  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleFieldOnChange(field, field2, value) {
    this.setState({
      [field]: value,
      [field2]: value
    });
  }

  getTaskData() {
    return {
      title: this.state.title,
      user_id: this.props.loggedUserId,
      content: this.state.content,
      book_id: this.props.book.id,
      category_id: this.state.category_id
    }
  }

  render() {
    return (

      <Container style={styles.container}>
<GoBack />
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

        <View>
  <Picker
  selectedValue = {this.state.selected}
  onValueChange = {(value)=> this.handleFieldOnChange('category_id', 'selected', value)}>
  {this.renderItem()}
  </Picker>
</View>

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
