import React from 'react';

import {
  View,
  Text,
  List,
  ListItem
} from 'native-base';

import styles from './list-errors.styles';

class ListErrorsComponent extends React.Component {
  errorListItem(error) {
    return (
      <ListItem key={error}>
        <Text style={styles.errorText}>
          {error}
        </Text>
      </ListItem>
    );
  }

  render() {
    if (this.props.errors === undefined) return null;

    return (
      <View>
        <List>
          {this.props.errors.map(
            (error) => this.errorListItem(error)
          )}
        </List>
      </View>
    );
  }
}

export default ListErrorsComponent;