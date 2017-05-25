import React from 'react';

import { Actions } from 'react-native-router-flux';

import {
  Container,
  Content,
  Text,
  Button
} from 'native-base';

import {
  Image
} from 'react-native';

import styles from './view-book-base.styles';

import GoBack from '../../components/go-back/go-back.component';

export default class ViewBookBase extends React.Component {

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Image
            style={{width: 240, height: 120}}
            source={{uri: 'https://cadernos-api.herokuapp.com/images/original/missing.jpg'}}
          />
        </Content>
      </Container>
    );
  }
}