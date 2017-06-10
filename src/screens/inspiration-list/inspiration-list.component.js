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
  CardItem,
  Icon
} from 'native-base';
import { ListView } from 'react-native';
import { Alert } from 'react-native'
import { Actions } from 'react-native-router-flux';
import NavigationHeader from '../../components/navigation-header/navigation-header.component';
import commonStyle from '../../styles/common.styles';

export default class InspirationList extends Component {

  componentDidMount() {
    this.props.getInspirations(this.props.primary);
  }

  handleFieldOnChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  callAlertToDelete(inspiration_id, book_id, inspiration_title) {
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

  shouldShowInspirationButtons() {
    return this.props.user.id === this.props.primary.userId;
  }

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <NavigationHeader style={{ flex: 1 }}
          title={"Inspirações"}
          displayGoBack={true}
          displayAddInspiration={this.shouldShowInspirationButtons()}
        />
        <View style={{ flex: 7 }}>
          <Content>
            <List>
              {this.props.inspirations.map(inspiration => {
                return (
                  <ListItem
                    onPress={() => {
                      this.props.selectInspiration(inspiration.inspirational_id)
                    }
                    }
                    key={inspiration.id} style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }} >
                    <Text>{inspiration.inspirational_title}</Text>
                    {this.shouldShowInspirationButtons() ?
                      <Button transparent onPress={
                        () => {
                          this.callAlertToDelete(inspiration.id, this.props.primary.id, inspiration.inspirational_title)
                        }
                      }>
                        <Icon name='md-trash' style={{ color: '#c0392b' }} />
                      </Button>
                      :
                      null
                    }

                  </ListItem>
                );
              })}
            </List>
          </Content>
        </View>
      </Container>
    );
  }
}
