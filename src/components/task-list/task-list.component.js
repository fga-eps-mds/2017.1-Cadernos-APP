import React, { Component, PropTypes } from 'react';
import { Actions } from 'react-native-router-flux';

import {
  Container,
  Content,
  View,
  Text,
  List,
  ListItem,
  Picker,
  Button,
  Spinner
} from 'native-base';

import { ListView } from 'react-native';

import buttonStyle from '../../global-styles/button.styles'
import styles from './task-list.styles';

export default class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: 0
    };
  }

  static propTypes = {
    tasks: PropTypes.array.isRequired,
    isVisitor: PropTypes.bool.isRequired,
    book: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
    memberships: PropTypes.array
  }

  isMemberShip(){
      isMemberShip = false;
      this.props.memberships.map(membership => {
        if(membership.id !== this.props.user.id){
          isMemberShip = true;
        }
      });
      return isMemberShip;
  }

  filterTaskByCategory(selectedCategory) {
    const tasks = this.props.tasks.filter(task => {
      return selectedCategory === 0 ||
        task.category_id === selectedCategory;
    });

    return tasks;
  }

  handlePickerOnValueChange(selected) {
    this.setState({ selectedCategory: selected });
  }

  render() {
    const tasks = this.filterTaskByCategory(this.state.selectedCategory);
    const categories = [{ id: 0, name: 'Todas' }].concat(this.props.categories);

    return (
      <Container>
        <Picker
          mode="dropdown"
          selectedValue={this.state.selectedCategory}
          onValueChange={(selected) => this.handlePickerOnValueChange(selected)}
          style={{ paddingTop: 10, backgroundColor: '#FFC513', color: "#FFF" }}
        >
          {categories.map(category => {
            return (
              <Picker.Item
                label={category.name}
                value={category.id}
                key={category.name}
              />
            );
          })}
        </Picker>

        {/*<View style={{ flex: 1 }}>*/}
          <Content>
            <List>
              {tasks.map(task => {
                return (
                  <ListItem
                    key={`${task.bookId}::${task.id}`}
                    onPress={() => Actions.ViewTask({ task })}
                  >
                    <View >
                      <Text>{task.title}</Text>
                    </View>
                  </ListItem>
                );
              })}
            </List>
          </Content>
        {/*</View>*/}

        {(this.props.user.id === this.props.book.userId) || (this.isMemberShip()) ?
          <View style={{ marginBottom: 0, padding: 5 }}>
            <Button block
              key="createBookActionButton"
              onPress={() => Actions.CreateTask({
                book: this.props.book,
                user: this.props.user,
              })} style={styles.createTaskButton}>
              <Text>Criar tarefa</Text>
            </Button>
          </View>
          :
          null
        }
      </Container>
    );
  }
}
