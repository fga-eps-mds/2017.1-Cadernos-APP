import React, { Component, PropTypes } from 'react';

import {
  Container,
  Content,
  ListItem,
  Text,
  CheckBox,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right
} from 'native-base';

import { Actions } from 'react-native-router-flux';

export default class NavigationHeader extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    displayGoBack: PropTypes.bool.isRequired
  };

  static contextTypes = {
    openDrawer: PropTypes.func.isRequired
  };

  render() {
    return (
        <Header>
          {this.props.displayGoBack ?
            <Left>
              <Button transparent onPress={() => Actions.pop()}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
          :
            <Left />
          }


          <Body>
            <Title style={{fontSize: 14}}>{this.props.title}</Title>
          </Body>

          <Right>
            <Button transparent onPress={this.context.openDrawer}>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
    );
  }
}
