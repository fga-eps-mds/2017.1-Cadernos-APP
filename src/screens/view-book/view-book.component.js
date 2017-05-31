import React from 'react';

import { Actions } from 'react-native-router-flux';

import {
  Container,
  Content,
  Text,
  Button,
  View,
  Icon,
  ActionSheet,
  Spinner
} from 'native-base';

import {
  Image,
  Alert
} from 'react-native';

import styles from './view-book.styles';

import GoBack from '../../components/go-back/go-back.component';
import TaskList from '../../components/task-list/task-list.component';

var BUTTONS = ['Sim', 'Não']
var YES_INDEX = 1;
var NO_INDEX = 2;
export default class ViewBook extends React.Component {
  constructor(props) {
    super(props);
    this.actionSheet = null;
  }

  getBookId() {
    return this.props.book.id
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={{ flex: 1 }}>
          <GoBack />
        </View>
        <Container style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>
              {this.props.book.title}
            </Text>
          </View>
          {this.props.user.id === this.props.book.userId ?
            <View>
              <Button danger small onPress={() =>
                Alert.alert(
                  'Deletar o caderno...',
                  'Deseja deletar o caderno ' + this.props.book.title + '?',
                  [
                    { text: 'Sim', onPress: () => this.props.deleteBook(this.getBookId()) },
                    { text: 'Não', onPress: () => console.log('apertou não mizeravi') }
                  ],
                  { cancelable: false }
                )} style={styles.deleteButton}>
                <Icon name="md-close-circle" />
              </Button>
              <ActionSheet ref={(c) => { this.actionSheet = c; }} />
            </View>
            :
            null
          }
        </Container>
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={{ width: 240, height: 120 }}
            source={{ uri: this.props.book.coverOriginal }}
          />
        </View>

        <View style={{ flex: 4 }}>
          <TaskList />
        </View>


        {this.props.user.id === this.props.book.userId ? //Talvez isVisitor bugue aqui, verificar mais tarde
          <View style={{ flex: 1 }}>
            {this.props.sendingData ?
            <Spinner />
            :
            <Button block bordered warning onPress={() => Actions.EditBook()}>
              <Text>Editar caderno</Text>
            </Button>
            }
          </View>
          :
          null
        }

      </Container >
    );
  }
}
