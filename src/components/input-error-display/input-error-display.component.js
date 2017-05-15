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
        {this.props.emailErrors ?
        <Text style={styles.errorText}>
          {this.props.emailErrors[0]}
        </Text>
        :
        null
        }

        {this.props.nameErrors ?
        <Text style={styles.errorText}>
          {this.props.nameErrors[0]}
        </Text>
        :
        null
        }

        {this.props.passwordErrors ?
        <Text style={styles.errorText}>
          {this.props.passwordErrors[0]}
        </Text>
        :
        null
        }

      </View>


    );
  }
}

export default InputErrorDisplayComponent;