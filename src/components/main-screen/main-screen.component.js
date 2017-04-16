import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Input,
  Tab,
  Tabs
} from 'native-base';

import { styles } from './main-screen.style';

export class MainScreenComponent extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent>
              <Icon name='ios-notifications-outline' />
            </Button>
          </Left>

          <Body>
            <Title>CADERNOS</Title>
          </Body>
        </Header>

        <Content>
          <Tabs>
            <Tab heading="LISTA">
              <Text>Lista</Text>
            </Tab>

            <Tab heading="CONEXÕES">
              <Text>Tab 2</Text>
            </Tab>
          </Tabs>
        </Content>

        <Footer>
          <FooterTab>
            <Button>
              <Icon name="home" style={styles.footerText} />
              <Text style={styles.footerText}>Home</Text>
            </Button>

            <Button>
              <Icon name="ios-search" style={styles.footerText} />
              <Text style={styles.footerText}>Buscar</Text>
            </Button>

            <Button>
              <Icon name="person" style={styles.footerText} />
              <Text style={styles.footerText}>Perfil</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}