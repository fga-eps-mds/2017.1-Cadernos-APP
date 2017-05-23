import { shallow } from 'enzyme';
import { expect } from 'chai';

import {
  TASK_SET,
  TASK_SET_CREATED,
  TASK_SET_ERRORS,
  TASK_SET_SENDING_DATA
} from '../../../src/config/actions-types';

import initialState from '../../../src/config/initial-state';

import { taskReducer } from '../../../src/reducers';

describe("Task Reducer", () => {
  it("Set task into the store", () => {
    const task = taskReducer(initialState.task, {
      type: TASK_SET,
      task: { id: 1 }
    });

    expect(task.id).to.equal(1);
  });



it("Set the task errors into the store", () => {
    const task = taskReducer(initialState.task, {
      type: TASK_SET_ERRORS,
      errors: {name: ["Can't be blank"]}
    });

    expect(task.errors.name).to.contains("Can't be blank");
  });

  it("Set task sendingData into the store", () => {
    const task = taskReducer(initialState.task, {
      type: TASK_SET_SENDING_DATA,
      sendingData: true
    });

    expect(task.sendingData).to.equal(true);
  });

  it("Set task created into the store", () => {
    const task = taskReducer(initialState.task, {
      type: TASK_SET_CREATED,
      created: true
    });

    expect(task.created).to.equal(true);
  });
});
