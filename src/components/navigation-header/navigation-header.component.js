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
  ActionSheet
} from 'native-base';

import { Actions } from 'react-native-router-flux';

let BOOK_CONFIG_OPTIONS = [
  'Editar',
  'Inspirações',
  'Deletar',
  'Cancelar'
];
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
    this.state = {
      selectedBookAction: -1
    };
  }

  componentDidUpdate(prevProps, prevState) {
      switch (this.state.selectedBookAction) {
        case 0:
          this.props.editAction();
          break;
        case 1:
          this.props.inspirationAction();
          break;
        case 2:
          this.props.deleteAction();
          break;
        default:
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
            <Title style={{fontSize: 14}}>{this.props.title}</Title>
          </Body>

          <Right>
            {this.props.displayBookActions ?
              <Button transparent onPress={() => {
                ActionSheet.show(
                  {
                    options: BOOK_CONFIG_OPTIONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                    title: 'Ações'
                  },
                  (buttonIndex) => {
                    this.setState({ selectedBookAction: buttonIndex });
                  }
                  )
                }}>
                <Icon name='md-cog' />
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
