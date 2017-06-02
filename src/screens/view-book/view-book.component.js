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
    this.props.fetchCategories();
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

        <View style={{ flex: 8 }}>
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
