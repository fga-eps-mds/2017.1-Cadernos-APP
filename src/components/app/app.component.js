import React, { Component, PropTypes } from 'react';
import { Drawer, Container, View } from 'native-base';

import SideBar from '../../screens/side-bar/side-bar.container'
import NavigationHeader from '../navigation-header/navigation-header.component';
import AppRouter from '../app-router/app-router.component';

export default class App extends Component {

  closeDrawer = () => {
    this.drawer._root.close()
  };

  openDrawer = () => {
    this.drawer._root.open();
  };

  static childContextTypes = {
    openDrawer: PropTypes.func,
    closeDrawer: PropTypes.func
  };

  getChildContext() {
    return {
      openDrawer: this.openDrawer,
      closeDrawer: this.closeDrawer
    };
  }

  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar />}
        onClose={() => this.closeDrawer()}
        side="right"
      >
        <Container style={{ flex: 1 }}>
          <AppRouter />
        </Container>
      </Drawer>
    );
  }
}
