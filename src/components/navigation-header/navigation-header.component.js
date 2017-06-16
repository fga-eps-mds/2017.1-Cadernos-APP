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
  'Gerar Ebook',
  'Deletar',
  'Cancelar'

];

let NOT_OWNER_BOOK_CONFIG_OPTIONS = [
  'Inspirações',
  'Gerar Ebook',
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
                this.props.generateBookAction();
                break;
              case "3":
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
              case "1":
                this.props.generateBookAction();
                break;
              default:
            }
          });
      }
    }
  }

  render() {
    return (
      <Header noShadow iosBarStyle='light-content' androidStatusBarColor={'#FFC513'} style={{ backgroundColor: '#FFC513', height: 50 }}>
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
          <Title style={{ fontSize: 15 }}>{this.props.title}</Title>
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
