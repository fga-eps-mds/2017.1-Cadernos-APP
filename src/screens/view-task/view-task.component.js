import React, { Component } from 'react';

import {
  Container,
  Content,
  List,
  ListItem,
  Button,
  Text,
  View
} from 'native-base';

import {
  Image
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const imageUrlMock = "http://68.media.tumblr.com/57995a853ed4ca881e6053e7e14ec21b/tumblr_mjb683SkIO1qbgtxfo1_500.gif";

import GoBack from "../../components/go-back/go-back.component";

export default class ViewTask extends Component {
  render() {
    const { id, bookId, user, title, content } = this.props.task;

    return (
      <Container style={{ flex: 1, padding: 5 }}>
        <GoBack />

        <View style={{ flex: 3 }}>
          <View>
            <Text>{title}</Text>
          </View>

          <View>
            <Text>Tarefa de: {user.name}</Text>
          </View>

          <View>
            <Text>{content}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices arcu quis feugiat aliquam. Quisque mollis nisi ut tellus fermentum vestibulum. Morbi sit amet lacus dictum, efficitur massa
            </Text>
          </View>
        </View>

        <View style={{ flex: 3 }}>
          <Content>
            <List>
              <ListItem>
                <Image
                  style={{ width: 240, height: 120 }}
                  source={{ uri: imageUrlMock }}
                />
              </ListItem>

              <ListItem>
                <Image
                  style={{ width: 240, height: 120 }}
                  source={{ uri: imageUrlMock }}
                />
              </ListItem>

              <ListItem>
                <Image
                  style={{ width: 240, height: 120 }}
                  source={{ uri: imageUrlMock }}
                />
              </ListItem>
            </List>
          </Content>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', marginTop: 5 }}>
          <Button bordered success>
            <Text>Adicionar iamgem</Text>
          </Button>

          <Button bordered warning style={{ marginLeft: 10 }}
            onPress={() => Actions.EditTask({task: this.props.task})}
          >
            <Text>Editar dados</Text>
          </Button>
        </View>
      </Container>
    );
  }
}