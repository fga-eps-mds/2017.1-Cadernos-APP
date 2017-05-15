import React from 'react';

import {
  Container,
  Content,
  Text
} from 'native-base';

import styles from './view-book.styles';

export default class ViewBook extends React.Component {

  static navigationOptions = {
    title: 'Caderno'
  };

  /**
   * If the book was just created, params will be undefined, but the selected book will
   * already be stored in the store.
   *
   * If the book was selected in a list or similar book selection, the selected book
   * will be passed by params. In this case, set the given book as the selected book
   * in the store.
   */
  componentDidMount() {
    const { params } = this.props.navigation.state;

    // Verify if the params has the book, otherwise just ignored it
    if (params && params.book && params.book.id > 0) {
      this.props.setSelectedBook(params.book);
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Text>
            {this.props.title}
          </Text>
        </Content>
      </Container>
    );
  }
}