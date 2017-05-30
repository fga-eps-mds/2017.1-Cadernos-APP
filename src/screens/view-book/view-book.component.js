import React from 'react';

import { Actions } from 'react-native-router-flux';

import {
  Container,
  Content,
  Text,
  Button,
  View
} from 'native-base';

import {
  Image
} from 'react-native';

import styles from './view-book.styles';

import GoBack from '../../components/go-back/go-back.component';
import TaskList from '../../components/task-list/task-list.component';
import NavigationHeader from '../../components/navigation-header/navigation-header.component';

export default class ViewBook extends React.Component {

  componentDidMount() {
    this.props.fetchBookTasks(this.props.book);
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={{ flex: 1 }}>
          <NavigationHeader
            title={this.props.book.title}
            displayGoBack={true}
          />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.title}>
            {this.props.book.title}
          </Text>
        </View>

        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={{ width: 240, height: 120 }}
            source={{ uri: this.props.book.coverOriginal }}
          />
        </View>

        <View style={{ flex: 4 }}>
          <TaskList tasks={this.props.tasks} />
        </View>


        {this.props.user.id === this.props.book.userId ? //Talvez isVisitor bugue aqui, verificar mais tarde
          <View style={{ flex: 1 }}>
            <Button block bordered warning onPress={() => Actions.EditBook()}>
              <Text>Editar caderno</Text>
            </Button>
          </View>
          :
          null
        }

      </Container >
    );
  }
}
