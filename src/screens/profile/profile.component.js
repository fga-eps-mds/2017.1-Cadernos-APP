import React, { Component } from 'react';

import {
  Container,
  Text,
  View
} from 'native-base';

import { SharedFooter } from '../../components';

export default class HomeScreen extends Component {

  render() {
    return (
      <Container style={{flex: 1}}>
        <View style={{flex: 8}}>
          <Text>Profile page</Text>
        </View>

        <View style={{flex: 1}}>
          <SharedFooter
            activeTab="profile"
            isVisitor={this.props.isVisitor}
          />
        </View>
      </Container>
    );
  }
}