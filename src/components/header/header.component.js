import React, { Component, PropTypes } from 'react';

import {
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  View
} from 'native-base';

import { Actions, ActionConst } from 'react-native-router-flux';
import styles from '../header/header.styles';
export default class SharedHeader extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    isVisitor: PropTypes.bool.isRequired
  }

  render() {
    return (
      <Footer >
        <FooterTab style={styles.header}>



          <Button>
            <Icon style={styles.iconsDrawer} name="md-menu" />

          </Button>
          <Text style={styles.text}>Meus cadernos</Text>

          <Button vertical
            key="searchButtom"
          >
            <Icon
              style={styles.iconsSearch}
              name="md-search" />

          </Button>

        </FooterTab>
      </Footer>
    );
  }
}