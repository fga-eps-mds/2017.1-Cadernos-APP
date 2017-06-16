import React, { Component, PropTypes } from 'react';

import {
  Footer,
  Button,
  Icon,
  Text,
  Input,
  Item,
  Container
} from 'native-base';

import { Actions, ActionConst } from 'react-native-router-flux';

import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

import style from '../../global-styles/button.styles';

export default class SharedFooter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: ''
    }
  }

  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    isVisitor: PropTypes.bool.isRequired
  }

  handleFieldOnChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  getSearchResult() {
    if (this.state.keyword === '') {
      this.props.bookList();
    } else {
      this.props.setupSearch(this.state.keyword)
    }
  }

  render() {
    return (
      <Footer style={{ backgroundColor: '#DCB032', height: 45 }}>
        <Item style={{ width: width * 0.7, marginLeft: '5%'}} >
          <Icon name="md-book" style={{ color: '#FFF' }}  />
          <Input
            //autoCorrect="false"
            underlineColorAndroid='#DCB032'
            keyboardType='email-address'
            autoComplete={false}
            placeholderTextColor="white"
            selectTextOnFocus={true}
            placeholder="Pesquisar Caderno"
            style={{ color: '#FFF' }}
            placeholderTextColor="white"
            onChangeText={(text) => this.handleFieldOnChange('keyword', text)} />
        </Item>
        <Button light transparent backgroundColor='#DCB032' onPress={() => this.getSearchResult()}>
          <Icon name="ios-search" style={{ color: 'white' }} />
        </Button>
      </Footer>
    );
  }
}
