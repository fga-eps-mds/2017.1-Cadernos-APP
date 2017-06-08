import React, { Component, PropTypes } from 'react';

import {
  Footer,
  FooterTab,
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
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    isVisitor: PropTypes.bool.isRequired
  }

  handleFieldOnChange(field, value) {
    this.setState({
      [field]: value
    });
  }


  render() {
    return (
      <Footer>
        <FooterTab style={style.sharedFooter}>
          <Item style={{width: width * 0.7, marginLeft: 10}}>
            <Input placeholder="Pesquise caderno por titulo" style={{color: '#FFF'}} placeholderTextColor="white"
              onChangeText={(text) => this.handleFieldOnChange('keyword', text)}/>
          </Item>
          <Button onPress={() => this.props.setupSearch(this.state.keyword)}>
            <Icon name="ios-search" style={{color: '#FFF'}}/>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
