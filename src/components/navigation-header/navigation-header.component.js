import React, { Component, PropTypes } from 'react';

import {
  Container, Content, ListItem, Text, CheckBox, Header, Left, Button, Icon, Body, Title, Right
} from 'native-base';

import { Actions } from 'react-native-router-flux';

export default class NavigationHeader extends Component {
  static propTypes = {
    title: PropTypes.string,
    openDrawer: PropTypes.func.isRequired,
    shouldGoBack: PropTypes.bool,
  };

  static defaultProps = {
    title: "Ola Mundo !",
    shouldGoBack: false
  }

  goBack = () => {
    if (this.props.shouldGoBack) {
      Actions.pop();
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.goBack}>
              <Icon name='arrow-back' />
            </Button>
          </Left>

          <Body>
            <Title>{this.props.title}</Title>
          </Body>

          <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}