import React, { Component, PropTypes } from 'react';

import {
  Container,
  Content,
  Button,
  Text,
  View,
  Item,
  Input,
  List,
  ListItem,
} from 'native-base';

import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native'

import NavigationHeader from '../../components/navigation-header/navigation-header.component';


export default class InviteList extends Component {

  handleFieldOnChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  componentDidMount() {
    this.props.getInvites(this.props.user)
  }


  deleteInvite(key, user) {
    Alert.alert(
      'Recusar o convite...',
      'Deseja recusar o convite?',
      [
        { text: 'Sim', onPress: () => this.props.delete(key, user) },
        { text: 'Não', onPress: () => console.log('apertou não mizeravi') }
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <NavigationHeader style={{ flex: 1 }}
          title={"Meus convites"}
          displayGoBack={true} />
        <List style={styles.list}>
          {this.props.invites.map(invite => {
            return (
              <ListItem key={invite.id} >

                <Text style={styles.textList}>{invite.sender_name + " te enviou um convite para colaborar com " + invite.book_title}</Text>
                <View style={{ flexDirection: 'column' }}>
                  <Button style={styles.buttonList}>
                    <Text style={styles.buttonText}>Aceitar</Text>
                  </Button>
                  <Button
                    style={styles.buttonList}
                    onPress={() => this.deleteInvite(invite.id, this.props.user)}
                  >
                    <Text style={styles.buttonText}>Recusar</Text>
                  </Button>
                </View>
              </ListItem>
            );
          })}
        </List>


      </Container>
    );
  }
}

const styles = {
  list: {
    flex: 6,

  },
  textList: {
    flex: 3
  },
  buttonList: {
    flex: 1
  },
  buttonText: {
    alignItems: 'center',
    justifyContent: 'center'
  }
}