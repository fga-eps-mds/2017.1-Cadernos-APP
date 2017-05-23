import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import { ImagePicker } from '../../../../src/components';

import MockImagePicker from '../../../../src/components/image-picker/__mocks__/react-native-image-picker';

import {
  Button
} from 'native-base';

describe("ImagePicker Component", () => {
  it("When initialized it has a single button", () => {
    const wrapper = shallow(
      <ImagePicker
        actualImageUrl=""
        sendImageTo={() => {}}
      />
    );


    expect(
      wrapper.find(Button)
      .length
    ).to.equal(1);
  });

  it("Display a cancel mutton once chage image button is pressed", () => {
    const wrapper = shallow(
      <ImagePicker
        actualImageUrl=""
        sendImageTo={() => {}}
      />
    );

    expect(
      wrapper.find(Button)
      .length
    ).to.equal(1);

    const changeImage = wrapper.findWhere(c => c.key() === "changeImageButton");

    /**
     * Workaround to make the cancel button appear
     * once change image button is pressed
     */
    MockImagePicker.setCallback(() => {
      wrapper.setState({ changeImage: true });
    });

    changeImage.simulate('press');

    expect(
      wrapper.find(Button)
      .length
    ).to.equal(2);
  });
});