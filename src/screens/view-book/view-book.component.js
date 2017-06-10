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
  Spinner,
  List,
  ListItem
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
    this.props.getMemberships(this.props.book);
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
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button style={{ ...buttonStyle.button, ...buttonStyle.default }}
          key="edit-book-button"
          onPress={() => Actions.EditBook()}
          disabled={this.props.user.id !== this.props.book.userId}
        >
          <Text>Editar caderno</Text>
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
      <Container style={styles.container} primary>
        <View style={{ flex: 1 }}>
          <NavigationHeader
            title={this.props.book.title}
            displayGoBack={true}
          />
        </View>

        <View style={{ flex: 1, justifyContent: 'center' }}>
          {this.props.sendingData === false ?
            this.displayBookActions()
            :
            <Spinner />
          }
        </View>

        <View style={{ flex: 7 }}>
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
                {this.props.memberships ?
                  this.props.memberships.map(membership => {
                  return (
                    <ListItem key={membership.id} >
                      <Text style={styles.textList}>{membership.member_name}</Text>
                    </ListItem>
                  );
                  })
                  :
                  null
              }
              <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                <Button bordered rounded small info
                  key="invite-collaborator-button"
                  disabled={this.props.user.id !== this.props.book.userId}
                  onPress={() => Actions.InviteCollaborator()}
                >
                  <Text>Convidar colaborador</Text>
                </Button>
                <Button bordered rounded small primary
                  key="invite-collaborator-list-button"
                  disabled={this.props.user.id !== this.props.book.userId}
                >
                  <Text>  Convites pendentes </Text>
                </Button>

              </View>

            </Tab>
          </Tabs>
        </View>
      </Container >
    );
  }
}
