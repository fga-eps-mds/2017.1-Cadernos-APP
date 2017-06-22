import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import fakeStore from '../../../../src/config/fakeStore';

import ViewTaskContainer from '../../../../src/screens/view-task/view-task.container';

describe("ViewTask Container", () => {
  let container;

	beforeEach(() => {
		const store = fakeStore({});

		const wrapper = shallow(
			<Provider store={store}>
				<ViewTaskContainer />
			</Provider>
		);

		container = wrapper.find(ViewTaskContainer);
	});

	it('should renders successfully', () => {
    expect(container.length).to.eq(1);
	});
});