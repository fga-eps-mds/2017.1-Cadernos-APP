import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import fakeStore from '../../../../src/config/fakeStore';

import ViewBookContainer from '../../../../src/screens/view-book/view-book.container';

describe("ViewBook Container", () => {
  let container;

	beforeEach(() => {
		const store = fakeStore({});

		const wrapper = shallow(
			<Provider store={store}>
				<ViewBookContainer />
			</Provider>
		);

		container = wrapper.find(ViewBookContainer);
	});

	it('should renders successfully', () => {
    expect(container.length).to.eq(1);
	});
});