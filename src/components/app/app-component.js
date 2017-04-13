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
  Text
} from "native-base";

import { styles } from './app-style';

export class AppComponent extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>

                <Content style={styles.mainContent}>
                    <Button primary style={styles.button}>
                      <Text> Primary </Text>
                    </Button>

                    <Button success style={styles.button}>
                      <Text> Success </Text>
                    </Button>

                    <Button info style={styles.button}>
                      <Text> Info </Text>
                    </Button>

                    <Button warning style={styles.button}>
                      <Text> Warning </Text>
                    </Button>

                    <Button danger style={styles.button}>
                      <Text> Danger </Text>
                    </Button>

                    <Button dark style={styles.button}>
                      <Text> Dark </Text>
                    </Button>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
