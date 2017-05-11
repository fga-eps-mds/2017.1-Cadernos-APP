import React, { Component} from 'react';
import {
  Text,
  View,
  Container,
  Content,
  H1,
  Item,
  Input,
  Button,
  Spinner
} from 'native-base';

import styles from './edit-user.styles';

export default class EditUser extends Component {
constructor (props) {
  super(props);
  this.state = {
    name: "",
    email: "",
    password: ""
   }
}

componentDidMount() {
  this.setState({
    name: this.props.name,
    email: this.props.email
  });
}

handleFieldOnChange(field, value) {
  this.setState({
    [field]: value
  });
}

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.wrapperTitle}>
          <H1 style={styles.title}>Editar Usuário</H1>
          <Text>Espaço para mudança de dados</Text>
        </View>

        <View style={styles.wrapperForm}>
          <Item regular style={styles.formItem}>
            <Input
              placeholder='Seu nome'
              onChangeText={(text) => this.handleFieldOnChange('name', text)}
              value={this.state.name}
            />
          </Item>

          <Item regular style={styles.formItem}>
            <Input
              placeholder='Seu e-mail'
              onChangeText={(text) => this.handleFieldOnChange('email', text)}
              value={this.state.email}
            />
          </Item>

          <Item regular style={styles.formItem}>
            <Input
              placeholder='Confirme sua senha'
              onChangeText={(text) => this.handleFieldOnChange('password', text)}
              value={this.state.password}
            />
          </Item>
        </View>

        <View style={{flex: 1}}>
            {this.props.sendingData ?
              <Spinner />
            :
              <Button warning block
  //              onPress={() => this.props.editUser(this.state)}
              >
                <Text>Salvar Dados</Text>
              </Button>
            }



          </View>
      </Container>
    );
  }
}


