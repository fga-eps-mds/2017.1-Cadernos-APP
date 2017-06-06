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

  render() {
    return (
      <Footer>
        <FooterTab style={style.sharedFooter}>
          <Item style={{width: width * 0.7, marginLeft: 10}}>
            <Input placeholder="Pesquise caderno por titulo" style={{color: '#FFF'}} placeholderTextColor="white"/>
          </Item>
          <Button>
            <Icon name="ios-search" style={{color: '#FFF'}}/>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}