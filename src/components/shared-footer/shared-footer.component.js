import React, { Component, PropTypes } from 'react';

import {
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from 'native-base';

import { Actions, ActionConst } from 'react-native-router-flux';

export default class SharedFooter extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    isVisitor: PropTypes.bool.isRequired
  }

  render() {
    return (
      <Footer >
        <FooterTab>
          <Button vertical active={this.props.activeTab === "books"}
            key="booksTabButton"
            onPress={() => Actions.Home({type: ActionConst.REPLACE})}
          >
            <Icon name="md-book" />
            <Text>Cadernos</Text>
          </Button>

          {this.props.isVisitor ?
            null
          :
            <Button vertical active={this.props.activeTab === "profile"}
              key="profileTabButton"
              onPress={() => Actions.Profile({type: ActionConst.REPLACE})}
            >
              <Icon name="person" />
              <Text>Perfil</Text>
            </Button>
          }

          <Button vertical
            key="exitTabButton"
            onPress={() => Actions.UserLogin({type: ActionConst.REPLACE, exitUser: true})}
          >
            <Icon name="md-exit" />
            <Text>Sair</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}