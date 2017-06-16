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
      <View style={{ flex: 1 }}>
        <NavigationHeader style={{ flex: 1 }}
          title={"Meus convites"}
          displayGoBack={true} />
        <List style={styles.list}>
          {this.props.invites.map(invite => {
            return (
              <ListItem key={invite.id} >

                <Text style={styles.textList}>{invite.sender_name + " te enviou um convite para colaborar com " + invite.book_title}</Text>
                <View style={styles.buttonList}>
                  <Button
                    style={styles.singleAcceptButton}
                    onPress={() => this.props.accept(invite, this.props.user)}
                  >
                    <Text style={styles.buttonText}>Aceitar</Text>
                  </Button>
                  <Button
                    style={styles.singleRefuseButton}
                    onPress={() => this.deleteInvite(invite.id, this.props.user)}
                  >
                    <Text style={styles.buttonText}>Recusar</Text>
                  </Button>
                </View>
              </ListItem>
            );
          })}
        </List>


      </View>
    );
  }
}

const styles = {
  list: {
    flex: 6,

  },
  textList: {
    flex: 2.5,
    textAlign: 'center'
  },
  buttonList: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10
  },
  singleAcceptButton: {
    flex: 1,
    width: '100%',
    backgroundColor: '#27ae60',
    marginBottom: '5%'
  },
  singleRefuseButton: {
    flex: 1,
    width: '100%',
    backgroundColor: '#e74c3c'
  },
  buttonText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 11
  }
}