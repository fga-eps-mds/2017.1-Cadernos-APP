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
  Card,
  CardItem
} from 'native-base';

import { Alert } from 'react-native'
import { Actions } from 'react-native-router-flux';

import NavigationHeader from '../../components/navigation-header/navigation-header.component';


export default class InspirationList extends Component {

  componentDidMount() {
    this.props.getInspirations(this.props.primary)
  }

  handleFieldOnChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  callAlertToDelete(inspiration_id, book_id, inspiration_title) {
    console.log("===============================================================")
    console.log(inspiration_title)
    Alert.alert(
      'Deletar relação',
      "Deseja deletar a relação do caderno " + inspiration_title + "?",
      [
        { text: 'Sim', onPress: () => this.props.deleteInspiration(inspiration_id, book_id) },
        { text: 'Não', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
      ],
      { cancelable: false }
    )

  }
  render() {
    return (
      <Container style={{ flex: 1 }}>
        <NavigationHeader style={{ flex: 1 }}
          title={"Inspirações"}
          displayGoBack={true} />
        <View style={{ flex: 7 }}>
          <Content>
            <List>
              {this.props.inspirations.map(inspiration => {
                return (
                  <ListItem key={inspiration.id} >
                    <Card>
                      <CardItem>
                        <Text>{inspiration.inspirational_title}</Text>
                      </CardItem>
                    </Card>
                    <View style={{ flexDirection: 'column' }}>
                      {
                        this.props.user.id === this.props.primary.userId ?
                          <Button danger
                            small
                            onPress={() => this.callAlertToDelete(inspiration.id, this.props.primary.id, inspiration.inspirational_title)}
                          >
                            <Text>-</Text>
                          </Button>
                          :
                          null
                      }
                    </View>
                  </ListItem>
                );
              })}
            </List>
          </Content>
        </View>
        {this.props.user.id === this.props.primary.userId ?
          <Button
            onPress={() => Actions.InspirationSearchList()}
            disabled={this.props.user.id !== this.props.primary.userId}
          >
            <Text>Adicionar Inspirações</Text>
          </Button>
          :
          null
        }
      </Container>
    );
  }
}