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
  Button
} from 'native-base';

import { ListView } from 'react-native';

import buttonStyle from '../../global-styles/button.styles'
import styles from './task-list.styles';

import TaskListItem from '../task-list-item/task-list-item.component';

export default class TaskList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      categories: [{ id: 0, name: 'Todas' }],
      selectedCategory: 0,
      dataSource: ds.cloneWithRows([])
    };
  }

  static propTypes = {
    tasks: PropTypes.array.isRequired,
    isVisitor: PropTypes.bool.isRequired,
    book: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
    memberships: PropTypes.array.isRequired,

  }


  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.tasks)
    });

    if (this.state.categories.length < nextProps.categories.length) {
      let categories = this.state.categories;
      categories = categories.concat(nextProps.categories);

      this.setState({ categories });
    }
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
    const dataSource = this.state.dataSource.cloneWithRows(tasks);

    return (
      <Container>
        <Picker
          mode="dropdown"
          selectedValue={this.state.selectedCategory}
          onValueChange={(selected) => this.handlePickerOnValueChange(selected)}
          style={{ paddingTop: 10, backgroundColor: '#2980b9' }}
        >
          {this.state.categories.map(category => {
            return (
              <Picker.Item
                label={category.name}
                value={category.id}
                key={category.name}
              />
            );
          })}
        </Picker>

        <View style={{ flex: 1 }}>
          <ListView
            dataSource={dataSource}
            renderRow={(rowData) => (
              <TaskListItem task={rowData} />
            )}
            renderSeparator={
              (sectionId, rowId) => <View key={rowId} style={styles.divisor} />
            }
            enableEmptySections={true}
          />
        </View>

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
