import React from 'react';

import {
  View,
  Text,
  List,
  ListItem
} from 'native-base';


import styles from './input-error-display.styles';

class InputErrorDisplayComponent extends React.Component {
  render() {
    if (this.props.errors === undefined) return null;

    const errorsItems = this.props.errors.map((error, index) => {
      return (
        <ListItem key={error}>
          <Text style={styles.errorText}>
            {error}
          </Text>
        </ListItem>
      );
    });

    return (
      <View>
        <List>
          {errorsItems}
        </List>
      </View>
    );
  }
}

export default InputErrorDisplayComponent;