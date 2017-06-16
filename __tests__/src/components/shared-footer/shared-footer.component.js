import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import SharedFooter from '../../../../src/components/shared-footer/shared-footer.component';

import {
  Button,
  Input
} from 'native-base';

describe("SharedFooter Component", () => {
  const wrapper = shallow(<SharedFooter activeTab="books" isVisitor={false} />);

  it("Has a button to search", () => {
    expect(
      wrapper.find(Button).length
    ).to.equal(1);
  });

  it("Has a input to search", () => {
    expect(
      wrapper.find(Input).length
    ).to.equal(1);
  });

  it("get search result", () => {
    wrapper.setState({ keyword: "abcd" });

    let testedWithKeyword = false;
    let testedWithoutKeyword = false;
    wrapper.setProps({
      setupSearch () {
        testedWithKeyword = true;
      },

      bookList() {
        testedWithoutKeyword = true;
      }
    })

    wrapper.find(Button).simulate("press");
    expect(testedWithKeyword).to.eq(true);


    wrapper.setState({ keyword: "" });
    wrapper.find(Button).simulate("press");
    expect(testedWithoutKeyword).to.eq(true);
  });

  it("changes keyword", () => {
    let input = wrapper.find(Input);
    input.simulate("changeText");
  });
});