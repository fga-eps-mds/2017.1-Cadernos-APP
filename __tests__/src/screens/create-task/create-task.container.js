import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import fakeStore from '../../../../src/config/fakeStore';

import CreateTaskContainer from '../../../../src/screens/create-task/create-task.container.js';

describe("CreateTask Container", () => {
  let container;

	beforeEach(() => {
		const store = fakeStore({});

		const wrapper = shallow(
			<Provider store={store}>
				<CreateTaskContainer />
			</Provider>
		);

		container = wrapper.find(CreateTaskContainer);
	});

	it('should renders successfully', () => {
    expect(container.length).to.eq(1);
	});
});