import React from 'react';

import {
  View,
  Text
} from 'native-base';

import styles from './input-error-display.styles';

class InputErrorDisplayComponent extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.errorText}>
          {this.props.errors}
        </Text>
      </View>
    );
  }
}

export default InputErrorDisplayComponent;