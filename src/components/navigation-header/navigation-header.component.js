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
  Right,
  View,
  ActionSheet
} from 'native-base';

import { Actions } from 'react-native-router-flux';

let BOOK_CONFIG_OPTIONS = [
  'Editar',
  'Inspirações',
  'Deletar',
  'Cancelar'
];

let NOT_OWNER_BOOK_CONFIG_OPTIONS = [
  'Inspirações',
  'Cancelar'
]

let DESTRUCTIVE_INDEX = 2;
let CANCEL_INDEX = 3;

export default class NavigationHeader extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    displayGoBack: PropTypes.bool.isRequired
  };

  static contextTypes = {
    openDrawer: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.actionSheet = null;
  }

  showActionSheet() {
    if (this.actionSheet !== null) {
      console.log('eaeee');

      console.log(this.props.currentLoggedUser + " e " + this.props.bookOwner)
      // Call as you would ActionSheet.show(config, callback)
      if (this.props.currentLoggedUser === this.props.bookOwner) {
        this.actionSheet._root.showActionSheet({
          options: BOOK_CONFIG_OPTIONS,
          cancelButtonIndex: CANCEL_INDEX,
          destructiveButtonIndex: DESTRUCTIVE_INDEX,
          title: 'Ações'
        },
          (buttonIndex) => {
            switch (buttonIndex.toString()) {
              case "0":
                this.props.editAction();
                break;
              case "1":
                this.props.inspirationAction();
                break;
              case "2":
                this.props.deleteAction();
                break;
              default:
            }
          });
      } else {
        this.actionSheet._root.showActionSheet({
          options: NOT_OWNER_BOOK_CONFIG_OPTIONS,
          cancelButtonIndex: CANCEL_INDEX,
          destructiveButtonIndex: DESTRUCTIVE_INDEX,
          title: 'Ações'
        },
          (buttonIndex) => {
            switch (buttonIndex.toString()) {
              case "0":
                this.props.inspirationAction();
                break;
              default:
            }
          });
      }
    }
  }

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
          <Title style={{ fontSize: 14 }}>{this.props.title}</Title>
        </Body>

        <Right>
          {this.props.displayBookActions ?
            <View>
              <Button light transparent onPress={() => { this.showActionSheet() }} >
                <Icon name='md-cog' />
              </Button>
              <ActionSheet ref={(c) => { this.actionSheet = c; }} />
            </View>
            :
            null
          }

          {this.props.displayAddInspiration ?
            <Button transparent onPress={() => { Actions.InspirationSearchList() }} >
              <Icon name='md-add' />
            </Button>
            :
            null
          }

          <Button transparent onPress={this.context.openDrawer}>
            <Icon name='menu' />
          </Button>
        </Right>

      </Header>
    );
  }
}
