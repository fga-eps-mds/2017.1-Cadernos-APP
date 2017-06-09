import React from 'react';

import { Actions } from 'react-native-router-flux';

import {
  Container,
  Content,
  Text,
  Button,
  View,
  Tabs,
  Tab,
  Icon,
  ActionSheet,
  Spinner
} from 'native-base';

import {
  Image,
  Alert
} from 'react-native';

import styles from './view-book.styles';
import buttonStyle from '../../global-styles/button.styles';

import GoBack from '../../components/go-back/go-back.component';
import TaskList from '../../components/task-list/task-list.component';
import NavigationHeader from '../../components/navigation-header/navigation-header.component';


export default class ViewBook extends React.Component {
  constructor(props) {
    super(props);
    this.actionSheet = null;
  }

  getBookId() {
    return this.props.book.id
  }

  componentDidMount() {
    this.props.fetchBookTasks(this.props.book);
    this.props.fetchCategories();
  }

  deleteBookConfirmation() {
    Alert.alert(
      'Deletar o caderno...',
      'Deseja deletar o caderno ' + this.props.book.title + '?',
      [
        { text: 'Sim', onPress: () => this.props.deleteBook(this.getBookId()) },
        { text: 'Não', onPress: () => console.log('apertou não mizeravi') }
      ],
      { cancelable: false }
    )
  }

  displayBookActions() {
    return (
      <View style={{ flexDirection: 'row', height: 50}}>
        <Button style={{ ...buttonStyle.button, ...buttonStyle.default }}
          key="edit-book-button"
          onPress={() => Actions.EditBook()}
          disabled={this.props.user.id !== this.props.book.userId}
        >
          <Text>Editar caderno</Text>
        </Button>
        <Button style={{ ...buttonStyle.button, ...buttonStyle.default }}
          key="inspirations-book-button"
          onPress={() => Actions.InspirationList()}
          //disabled={this.props.user.id !== this.props.book.userId}
        >
          <Text>Inspirações</Text>
        </Button>

        <Button style={{ ...buttonStyle.button, ...buttonStyle.delete }}
          key="delete-book-button"
          onPress={() => this.deleteBookConfirmation()}
          disabled={this.props.user.id !== this.props.book.userId}>
          <Text>Deletar caderno</Text>
        </Button>
      </View>
    );
  }

  render() {
    return (
        <View style={{height: '100%', marginTop: 0}}>
            <NavigationHeader
              title={this.props.book.title}
              displayGoBack={true}
            />
          <Tabs>
              <Tab heading="Tarefas">
                <TaskList
                  tasks={this.props.tasks}
                  isVisitor={this.props.isVisitor}
                  book={this.props.book}
                  user={this.props.user}
                  categories={this.props.categories}
                />
              </Tab>

              <Tab heading="Categorias">
                <Text>Um texto away</Text>
              </Tab>

              <Tab heading="Colaboradores">
                <Text>Um texto away</Text>
              </Tab>
          </Tabs>
        </View>
    );
  }
}
