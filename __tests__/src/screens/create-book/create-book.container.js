import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import fakeStore from '../../../../src/config/fakeStore';

import CrateBookContainer from '../../../../src/screens/create-book/create-book.container';

describe("CrateBook Container", () => {
  let container;

	beforeEach(() => {
		const store = fakeStore({});

		const wrapper = shallow(
			<Provider store={store}>
				<CrateBookContainer />
			</Provider>
		);

		container = wrapper.find(CrateBookContainer);
	});

	it('should renders successfully', () => {
    expect(container.length).to.eq(1);
	});
});