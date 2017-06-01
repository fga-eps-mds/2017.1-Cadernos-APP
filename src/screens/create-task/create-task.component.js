import React, { Component, PropTypes } from 'react'
import { Container, Text, Button, Content, View, Input, Item, Textarea } from 'native-base'
import Navigation from '../../components/navigation-header/navigation-header.component'
import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window');

export default class CreateTask extends Component {
  static propTypes = {

  }

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Navigation title='Criar Tarefa' displayGoBack={true} />
        </View>
        <View style={{ flex: 6, padding: 5 }}>
          <Item>
            <Input
              placeholder='title'
            />
          </Item>
          <Item>
            <Textarea style={{ marginTop: 10, width, height: 200 }}
              placeholder='Conteudo'
            />
          </Item>

        </View>
        <View style={{ flex: 2 }}>
          <Button block success bordered rounded >
            <Text> Criar </Text>
          </Button>
          <Button style={{ marginTop: 10 }} block warning bordered rounded >
            <Text> Cancelar </Text>
          </Button>
        </View>
      </Container>
    );
  }
}