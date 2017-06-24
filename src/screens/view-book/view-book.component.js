import React from 'react';

import { Actions } from 'react-native-router-flux';
import { getBaseUrl } from '../../config/axios';

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
  Alert,
  Linking
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

  getEBook() {
    Alert.alert(
      'Gerar eBook',
      this.props.book.title + '.pdf',
      [
        { text: 'Abrir eBook em outro app', onPress: () => Linking.openURL(`${getBaseUrl()}/books/${this.props.book.id}/${this.props.book.title}.pdf`) },
        { text: 'Copiar link', onPress: () => this.props.copiarLink(this.props.book) }
      ]
    )
  }

  componentDidMount() {
    // Wait the screen to be fully displayed
    setTimeout(() => {
      this.props.fetchBookTasks(this.props.book);
      this.props.getMemberships(this.props.book);

      if (this.props.categories.length === 0) {
        this.props.fetchCategories();
      }
    }, 200);
  }

  componentWillUnmount() {
    this.props.clearTasks();
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


  render() {
    const members = [
      {
        id: this.props.book.userId,
        member_name: this.props.book.authorName
      },

      ...this.props.memberships
    ]

    return (
      <View style={{ height: '100%', marginTop: 0 }}>
        <NavigationHeader
          title={this.props.book.title}
          displayGoBack={true}
          displayBookActions={true}
          editAction={() => Actions.EditBook()}
          deleteAction={() => this.deleteBookConfirmation()}
          inspirationAction={() => Actions.InspirationList()}
          generateBookAction={() => this.getEBook()}
          currentLoggedUser={this.props.user.id}
          bookOwner={this.props.book.userId}
        />
        <Tabs>
          <Tab
            heading="Tarefas"
            activeTabStyle={{ backgroundColor: '#DCB032' }}
            tabStyle={{ backgroundColor: '#FFC513' }}
            textStyle={{ color: 'white' }}
            activeTextStyle={{ color: 'white' }}
          >
            <TaskList
              tasks={this.props.tasks}
              isVisitor={this.props.isVisitor}
              book={this.props.book}
              user={this.props.user}
              categories={this.props.categories}
              memberships={this.props.memberships}
            />
          </Tab>
          <Tab
            heading="Colaboradores"
            activeTabStyle={{ backgroundColor: '#DCB032' }}
            tabStyle={{ backgroundColor: '#FFC513' }}
            textStyle={{ color: 'white' }}
            activeTextStyle={{ color: 'white' }}
          >
            <View>
              {members.map(membership => {
                return (
                  <ListItem key={membership.id} >
                    <Text style={styles.textList}>
                      {membership.member_name === this.props.book.authorName ?
                        `Autor: ${membership.member_name}`
                      :
                        membership.member_name
                      }
                    </Text>
                  </ListItem>
                );
              })}
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end', alignSelf: 'center' }}>
              <Button bordered rounded small info style={styles.collaboratorButtons}
                key="invite-collaborator-button"
                disabled={this.props.user.id !== this.props.book.userId}
                onPress={() => Actions.InviteCollaborator()}
              >
                <Text>Convidar colaborador</Text>
              </Button>
              <Button bordered rounded small primary style={styles.collaboratorButtons}
                key="invite-collaborator-list-button"
                disabled={this.props.user.id !== this.props.book.userId}>
                <Text>Convites pendentes</Text>
              </Button>
            </View>

          </Tab>
        </Tabs>
      </View>
    );
  }
}
