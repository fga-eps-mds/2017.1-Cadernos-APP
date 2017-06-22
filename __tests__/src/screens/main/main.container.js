import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import fakeStore from '../../../../src/config/fakeStore';

import MainContainer from '../../../../src/screens/main/main.container';

describe("Main Container", () => {
  let container;

	beforeEach(() => {
		const store = fakeStore({});

		const wrapper = shallow(
			<Provider store={store}>
				<MainContainer />
			</Provider>
		);

		container = wrapper.find(MainContainer);
	});

	it('should renders successfully', () => {
    expect(container.length).to.eq(1);
	});
});