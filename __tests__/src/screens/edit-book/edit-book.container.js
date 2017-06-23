import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import fakeStore from '../../../../src/config/fakeStore';

import EditBookContainer from '../../../../src/screens/edit-book/edit-book.container';

describe("EditBook Container", () => {
  let container;

	beforeEach(() => {
		const store = fakeStore({});

		const wrapper = shallow(
			<Provider store={store}>
				<EditBookContainer />
			</Provider>
		);

		container = wrapper.find(EditBookContainer);
	});

	it('should renders successfully', () => {
    expect(container.length).to.eq(1);
	});
});