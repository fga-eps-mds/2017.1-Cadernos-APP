import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import { ListErrors } from '../../../../src/components';

import {
  List,
  ListItem,
  Text
} from 'native-base';

describe("ListErrors Component", () => {
  it("retuns null when no error is given", () => {
    const wrapper = shallow(<ListErrors errors={undefined} />);
    expect(wrapper.type()).to.equal(null);
  });

  it("Render a List with it's given errors", () => {
    const errors = ["Can't be blank", "Can't have less than 5 characters"];
    const wrapper = shallow(<ListErrors errors={errors} />);

    expect(
      wrapper.findWhere(component => component.type() === List)
            .length
    ).to.equal(1);

    expect(
      wrapper.findWhere(component => component.type() === ListItem)
            .length
    ).to.equal(2);

    let listItemError = wrapper.findWhere(component => component.key() === "Can't be blank");
    expect(
      listItemError.length
    ).to.equal(1);

    expect(
      listItemError.find(Text).prop('children')
    ).to.equal("Can't be blank");


    listItemError = wrapper.findWhere(component => component.key() === "Can't have less than 5 characters");
    expect(
      listItemError.length
    ).to.equal(1);

    expect(
      listItemError.find(Text).prop('children')
    ).to.equal("Can't have less than 5 characters");
  });
});