import React from 'react';

import {
  View,
  Button,
  Icon
} from "native-base";

import { Actions } from 'react-native-router-flux';

import styles from './go-back.styles';

const GoBackComponent = () => (
  <View style={styles.mainWrapper}>
    <Button transparent
      onPress={() => { Actions.pop() }}
    >
      <Icon name="ios-arrow-back" />
    </Button>
  </View>
);

export default GoBackComponent;