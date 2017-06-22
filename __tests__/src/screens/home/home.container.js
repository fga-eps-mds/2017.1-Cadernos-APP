import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import fakeStore from '../../../../src/config/fakeStore';

import HomeScreenContainer from '../../../../src/screens/home/home.container';

describe("HomeScreen Container", () => {
  let container;

	beforeEach(() => {
		const store = fakeStore({});

		const wrapper = shallow(
			<Provider store={store}>
				<HomeScreenContainer />
			</Provider>
		);

		container = wrapper.find(HomeScreenContainer);
	});

	it('should renders successfully', () => {
    expect(container.length).to.eq(1);
	});
});