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
        {this.props.emailErrors && this.props.emailErrors[0] == 'can\'t be blank' ?
        <Text style={styles.errorText}>
          E-mail vazio!
        </Text>
        :
        this.props.emailErrors && this.props.emailErrors[0] == 'is invalid' ?
        <Text style={styles.errorText}>
          E-mail inválido!
        </Text>
        :
        this.props.emailErrors && this.props.emailErrors[0] == 'has already been taken' ?
        <Text style={styles.errorText}>
          E-mail já cadastrado!
        </Text>
        :
        null
        }

        {this.props.titleErrors && this.props.titleErrors[0] == 'can\'t be blank' ?
        <Text style={styles.errorText}>
          Título vazio!
        </Text>
        :
        this.props.titleErrors && this.props.titleErrors[0] == 'is invalid' ?
        <Text style={styles.errorText}>
          Título inválido!
        </Text>
        :
        this.props.titleErrors && this.props.titleErrors[0] == 'is too short (minimum is 5 characters)' ?
        <Text style={styles.errorText}>
          Título muito curto! (mínimo 5 de caracteres)
        </Text>
        :
        this.props.titleErrors && this.props.titleErrors[0] == 'is too long (maximum is 80 characters)' ?
        <Text style={styles.errorText}>
          Título muito longo! (máximo 80 de caracteres)
        </Text>
        :
        null
        }

        {this.props.contentErrors && this.props.contentErrors[0] == 'can\'t be blank' ?
        <Text style={styles.errorText}>
          Conteúdo vazio!
        </Text>
        :
        this.props.contentErrors && this.props.contentErrors[0] == 'is invalid' ?
        <Text style={styles.errorText}>
          Conteúdo inválido!
        </Text>
        :
        null
        }

        {this.props.nameErrors && this.props.nameErrors[0] == 'can\'t be blank'?
        <Text style={styles.errorText}>
          Nome vazio!
        </Text>
        :
        this.props.nameErrors && this.props.nameErrors[0] == 'is too short (minimum is 5 characters)' ?
        <Text style={styles.errorText}>
          Nome muito curto! (mínimo 5 de caracteres)
        </Text>
        :
        this.props.nameErrors && this.props.nameErrors[0] == 'is too long (maximum is 80 characters)' ?
        <Text style={styles.errorText}>
          Nome muito longo! (máximo 80 de caracteres)
        </Text>
        :

        null
        }

        {this.props.passwordErrors && this.props.passwordErrors[0] == 'can\'t be blank' ?
        <Text style={styles.errorText}>
          Senha vazia!
        </Text>
        :
        null
        }
        {this.props.userLoginErrors == 'Invalid credentials' ?
        <Text style={styles.errorText}>E-mail e/ou senha inválido(s)!</Text>
          :
          null
        }
        {this.props.bookCreateErrors == 'has already been taken' ?
        <Text style={styles.errorText}>Título já existente!</Text>
          :
          null
        }

      </View>


    );
  }
}

export default InputErrorDisplayComponent;