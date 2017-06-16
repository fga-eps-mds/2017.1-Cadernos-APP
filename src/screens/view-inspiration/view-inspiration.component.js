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

import styles from './view-inspiration.styles';
import buttonStyle from '../../global-styles/button.styles';

import GoBack from '../../components/go-back/go-back.component';
import TaskList from '../../components/task-list/task-list.component';
import NavigationHeader from '../../components/navigation-header/navigation-header.component';


export default class ViewInspiration extends React.Component {
  constructor(props) {
    super(props);
    this.actionSheet = null;
  }

  getInspirationId() {
    return this.props.inspiration.id
  }

  componentDidMount() {
    console.log("aquii " + this.props.inspiration.id + " e " + this.props.inspiration.title)
    this.props.fetchInspirationTasks(this.props.inspiration);
    this.props.fetchCategories();
  }

  render() {
    return (
      <View style={{ height: '100%', marginTop: 0 }}>
        <NavigationHeader
          title={this.props.inspiration.title}
          displayGoBack={true}
          displayBookActions={false}
        />
        <Tabs>
          <Tab
            heading={"Tarefas de " + this.props.inspiration.title}
            activeTabStyle={{ backgroundColor: '#2980b9' }}
            tabStyle={{ backgroundColor: '#3498db' }}
            textStyle={{ color: 'white' }}
            activeTextStyle={{ color: 'white' }}>
            <TaskList
              tasks={this.props.inspirationTasks}
              isVisitor={true}
              book={this.props.inspiration}
              user={this.props.user}
              categories={this.props.categories}
            />
          </Tab>


        </Tabs>
      </View>
    );
  }
}
