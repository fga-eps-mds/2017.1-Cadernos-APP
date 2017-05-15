import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import CrateBookComponent from '../../../../src/screens/create-book/create-book.component';

import {
  List,
  ListItem,
  Spinner,
  Button,
  Text,
  Input
} from 'native-base';

describe("CreateBook Component", () => {
  it("Displays a Spinner when sending data but not a button", () => {
    const wrapper = shallow(
      <CrateBookComponent
        sendingData={true}
        errors={{}}
      />
    );

    expect(wrapper.find(Spinner).length).to.equal(1);
    expect(wrapper.find(Button).length).to.equal(0);
  });

  it("Displays a Button instead of Spinner when not sending data", () => {
    const wrapper = shallow(
      <CrateBookComponent
        sendingData={false}
        errors={{}}
      />
    );

    expect(wrapper.find(Spinner).length).to.equal(0);
    expect(wrapper.find(Button).length).to.equal(1);
  });

  it("The Button when pressed will pass the title and logged user to a props function", () => {
    const createBookProps = (data) => {
      expect(data.title).to.equal('test book title');
      expect(data.loggedUserId).to.equal(5);
    }

    const wrapper = shallow(
      <CrateBookComponent
        sendingData={false}
        errors={{}}
        loggedUserId={5}
        createBook={createBookProps}
      />
    );

    wrapper.setState({ title: 'test book title' });
    wrapper.find(Button).simulate('press');
  });

  it("Will navigate to ViewBook once created change from false to true", () => {
    const clearErrors = () => {}

    const navigation = {
      navigate(screen) {
        expect(screen).to.equal('ViewBook');
      }
    }

    const wrapper = shallow(
      <CrateBookComponent
        sendingData={false}
        errors={{}}
        navigation={navigation}
        created={false}
        clearErrors={clearErrors}
      />
    );

    wrapper.setProps({ created: true });
  });
});