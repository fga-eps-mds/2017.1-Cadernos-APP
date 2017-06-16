import React, { Component } from 'react';

import { Actions } from 'react-native-router-flux';


import {
  Container,
  Content,
  Text,
  Button,
  Input,
  Item,
  Spinner,
  View
} from 'native-base';

import styles from './edit-book.styles';

import GoBack from '../../components/go-back/go-back.component';
import ImagePicker from '../../components/image-picker/image-picker.component';

import ListErrors from '../../components/list-errors/list-errors.component'

export default class EditBook extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
    }
  }

  componentDidMount() {
    this.setState({ title: this.props.book.title });
    this.props.clearErrors();

  }

  handleFieldOnChange(field, value) {
    this.setState({
      [field]: value
    });
  }


  getBookData() {
    const book = {
      ...this.props.book,
      title: this.state.title
    }

    return book;
  }

  render() {
    return (
      <View style={styles.container}>
        <GoBack />

        <View style={{ marginTop: 10, marginBottom: '30%', padding: 10 }}>
          {this.props.book.sendingData ?
            <Spinner />
            :
            <ImagePicker
              actualImageUrl={this.props.book.coverOriginal}
              sendImageTo={(imageSource, imageBase64) => this.props.uploadCover(this.props.book, imageSource, imageBase64)}
            />
          }
        </View>
        <View>
          <Item regular style={styles.formItem}>
            <Input
              placeholder='Nome do caderno'
              returnKeyType='next'
              onChangeText={(text) => this.handleFieldOnChange('title', text)}
              value={this.state.title}
            />
          </Item>

          <ListErrors errors={this.props.book.errors.title} />


          {this.props.book.sendingData ?
            <Spinner />
            :
            <Button block  warning
              onPress={() => this.props.editBook(this.getBookData())}
            >
              <Text>Confirmar</Text>
            </Button>
          }
        </View>
      </View>
    );
  }
}

