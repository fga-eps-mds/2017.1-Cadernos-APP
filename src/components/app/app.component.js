import React, { Component } from 'react';

import { Router, Scene } from 'react-native-router-flux';

import { Drawer, Container, View } from 'native-base';

import {
  CreateUserScreen,
  UserLoginScreen,
  MainScreen,
  CreateBookScreen,
  ViewBookScreen,
  EditUserScreen,
  EditBookScreen,
  HomeScreen,
  ProfileScreen,
  ViewBookBaseTasks,
  ViewBookBaseCategories,
  ViewBookBaseColaborators
} from '../../screens';

import SideBar from '../../screens/side-bar/side-bar.component'
import NavigationHeader from '../navigation-header/navigation-header.component';

import MyTasks from '../../screens/my-tasks/my-tasks.component';
import ViewTask from '../../screens/view-task/view-task.component';
import EditTask from '../../screens/edit-task/edit-task.component';


export default class App extends Component {

  closeDrawer = () => {
    this.drawer._root.close()
  };

  openDrawer = () => {
    this.drawer._root.open();
  };

  componentDidMount() {
    this.openDrawer();
  }

  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar />}
        onClose={() => this.closeDrawer()}
        side="right"
      >
        <Container style={{flex: 1}}>
          <View style={{flex: 1}}>
            <NavigationHeader
              openDrawer={this.openDrawer}
            />
          </View>

          <View style={{flex: 9}}>
            <Router hideNavBar={true}>
              <Scene key="ViewBookBaseCategories" component={ViewBookBaseCategories} />
              <Scene key="ViewBookBaseColaborators" component={ViewBookBaseColaborators} />
              <Scene key="ViewBookBaseTasks" component={ViewBookBaseTasks} />
              <Scene key="Main" component={MainScreen} initial />
              <Scene key="CreateUser" component={CreateUserScreen} />
              <Scene key="UserLogin" component={UserLoginScreen} />
              <Scene key="Home" component={HomeScreen} />
              <Scene key="Profile" component={ProfileScreen} />
              <Scene key="EditUser" component={EditUserScreen} />
              <Scene key="CreateBook" component={CreateBookScreen} />
              <Scene key="ViewBook" component={ViewBookScreen} />
              <Scene key="EditBook" component={EditBookScreen} />
              <Scene key="ViewTask" component={ViewTask} />
              <Scene key="EditTask" component={EditTask} />
            </Router>
          </View>
        </Container>
      </Drawer>
    );
  }
}
