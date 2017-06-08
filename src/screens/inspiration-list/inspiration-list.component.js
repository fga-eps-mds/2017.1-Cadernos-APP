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
                      <Button danger
                        small
                      //onPress={() => this.props.addInspiration(this.getInspirationData(book))}
                      >
                        <Text>-</Text>
                      </Button>
                    </View>
                  </ListItem>
                );
              })}
            </List>
          </Content>
        </View>
        <Button
          onPress={() => Actions.InspirationSearchList()}
        //disabled={this.props.user.id !== this.props.book.userId}
        >
          <Text>Adicionar Inspirações</Text>
        </Button>

      </Container>
    );
  }
}