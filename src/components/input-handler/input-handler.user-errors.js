import React, { Component } from 'react';
import {
  Text,
  View,
  Container,
} from 'native-base';

import styles from './input-handler.user-errors.styes';

export default class UserErrors extends Component {
  render() {
    return (
      <View>
        {this.props.errors && this.props.errors.name ?
          <Text style={styles.errorText}>
            {this.props.errors.name}
          </Text>
          :
          null
        }

        {this.props.errors && this.props.errors.email ?

            <Text>{this.props.errors.email}</Text>
        :
            null

          }

          {this.props.errors && this.props.errors.password ?
          <Text>{this.props.errors.password}</Text>
          :
          null
        }

      </View>


    );
  }
}