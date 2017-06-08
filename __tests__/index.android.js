import 'react-native';
import React from 'react';
import Index from '../index.android';

import { shallow } from 'enzyme';
import { expect } from 'chai';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import App from '../src/components/app/app.component';
import { Provider } from 'react-redux';

describe("Index.android  ColaborArt Component", () => {
  it('Has has an App component that initialize the whole app', () => {
    const wrapper = shallow(<Index />);

    expect(
      wrapper.contains(<App />)
    ).to.equal(true);
  });

  it('Has has an Proviver component that pass the store to the whole app', () => {
    const wrapper = shallow(<Index />);

    expect(
      wrapper.findWhere(component => component.type() === Provider)
            .length
    ).to.equal(1);



  });
});