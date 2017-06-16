import React, { Component, PropTypes } from 'react'
import {
  Container,
  Text,
  Button,
  Content,
  View,
  Input,
  Item,
  Textarea,
  Picker,
  Spinner
} from 'native-base'

import buttonStyle from '../../global-styles/button.styles';

import Navigation from '../../components/navigation-header/navigation-header.component'
import ListErrors from '../../components/list-errors/list-errors.component';
import styles from './create-task.styles';
import { InputErrorDisplay, GoBack } from '../../components';

import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class CreateTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      category: 0
    }
  }

  static propTypes = {
    createTask: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    sendingData: PropTypes.bool.isRequired
  }

 handleFieldOnChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  componentDidMount() {
    this.setState({
      category: this.props.categories[0].id
    })
  }

  componentWillUnmount() {
    this.props.clearTaskData();
  }

  getData() {
    return {
      title: this.state.title,
      content: this.state.content,
      user_id: this.props.user.id,
      book_id: this.props.book.id,
      category_id: this.state.category
    };
  }

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Navigation title='Criar Tarefa' displayGoBack={true} />
        </View>

        <View style={{ flex: 1 }}>
          <Picker mode="dropdown"
            selectedValue={this.state.category}
            onValueChange={(value) => this.setState({ category: value })}
          >
            {this.props.categories.map(category => {
              return (
                <Picker.Item
                  label={category.name}
                  value={category.id}
                  key={category.name}
                />
              );
            })}
          </Picker>
        </View>

          <View style={styles.wrapperForm}>
            <Item regular style={styles.formItem}>
              <Input
                placeholder='Titulo'
                onChangeText={(text) => this.handleFieldOnChange('title', text)}
                value={this.state.title}
              />
            </Item>
            
            {this.props.errors && this.props.errors.title ?
              <InputErrorDisplay titleErrors={this.props.errors.title} />
              // <ListErrors errors={this.props.errors.title} />
              :
              null
            }

            <Item>
              <Textarea style={{ marginTop: 10, width: width * 0.9, height: 150 }}
                placeholder='Conteudo'
                value={this.state.content}
                onChangeText={(text) => this.setState({ content: text })} />
            </Item>
            {this.props.errors && this.props.errors.content ?
              <InputErrorDisplay contentErrors={this.props.errors.content} />
              // <ListErrors errors={this.props.errors.content} />
              :
              null
            }
          </View>

        <View style={{ flex: 2 }}>
          {this.props.sendingData ?
            <Spinner />
            :
            <Button block onPress={() => this.props.createTask(this.getData())}
              style={{...buttonStyle.button, ...buttonStyle.default}}>
              <Text>Criar</Text>
            </Button>
          }
        </View>
      </Container>
    );
  }
}