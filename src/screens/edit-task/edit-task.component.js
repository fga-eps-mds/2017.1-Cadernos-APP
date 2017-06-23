import React, { Component } from 'react';

import {
  Container,
  Content,
  List,
  ListItem,
  Button,
  Text,
  View,
  Input,
  Item,
  Textarea,
  Picker
} from 'native-base';

import {
  Alert
} from 'react-native';

import buttonStyle from '../../global-styles/button.styles';

const imageUrlMock = "http://68.media.tumblr.com/57995a853ed4ca881e6053e7e14ec21b/tumblr_mjb683SkIO1qbgtxfo1_500.gif";

import { Actions } from 'react-native-router-flux'

import ImagePicker from '../../components/image-picker/image-picker.component';

import GoBack from "../../components/go-back/go-back.component";

import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class EditTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      selectedValue: 1
    }
  }

  componentDidMount() {
    console.log(this.props);

    this.setState({
      title: this.props.task.title,
      content: this.props.task.content
    });
  }

  handleInputChange(field, text) {
    this.setState({ [field]: text });
  }

  getUserConfirmation() {
    Alert.alert(
      'ATENÇÃO',
      'Tem certeza que deseja deletar essa atividade ?',
      [
        { text: 'Não', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'Sim', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false })
  }

  getTaskData() {
    console.log("SINGLE TASKS");
    console.log(this.props.task);

    const task = {
      ...this.props.task,
      title: this.state.title,
      content: this.state.content,
      category: this.state.selectedValue,
      picture_base: this.state.picture_base
    }

    return task;
  }

  render() {
    return (
      <Container style={{ flex: 1, padding: 5 }}>
        <GoBack />
        <Content>
          <View>
            <View>
              <Picker
                selectedValue={this.state.selectedValue}
                onValueChange={(value) => this.setState({ selectedValue: value })}
              >
                <Picker.Item label="Ciclano" value={2} />
                <Picker.Item label="Fulano" value={1} />
                <Picker.Item label="Deltrano" value={3} />
                <Picker.Item label="Beltrano" value={4} />
              </Picker>
            </View>

            <View>
              <Item regular>
                <Input
                  value={this.state.title}
                  onChangeText={(text) => this.handleInputChange('title', text)}
                  placeholder="Title"
                />
              </Item>
            </View>

            <View>
              <Item regular>
                <Textarea
                  value={this.state.content}
                  onChangeText={(text) => this.handleInputChange('content', text)}
                  placeholder="Content"
                  style={{ width: width * 0.9, height: 150 }}
                />
              </Item>
            </View>
          </View>
          <View style={{ marginLeft: '30%', marginBottom: 10 }}>
            <Button rounded small onPress={() => Actions.Sketch({ id: this.props.task.id })}>
              <Text>Abrir sketch</Text>
            </Button>
          </View>
          <View style={{ paddingBottom: "5%" }}>
            <ImagePicker
              sendImageTo={(imageSource, imageBase64) => this.setState({ picture_base: `data:image/png;base64,${imageBase64}` })}

            />
          </View>


          <View style={{}}>
            <Button block warning small rounded style={{width: '70%', alignSelf: 'center' }}
              onPress={() => this.props.editTask(this.getTaskData())}>
              <Text>Salvar</Text>
            </Button>

            <Button block danger small rounded style={{ marginTop: 10, width: '70%', alignSelf: 'center' }}
              onPress={() => this.getUserConfirmation()}>
              <Text>Excluir</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
