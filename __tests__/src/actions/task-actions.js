import { shallow } from 'enzyme';
import { expect } from 'chai';

import {
  TASK_SET,
  TASK_SET_ERRORS,
  TASK_SET_SENDING_DATA,
  TASK_SET_CREATED
} from '../../../src/config/actions-types';

import initialState from '../../../src/config/initial-state';

import {
  taskSet,
  taskSetErrors,
  taskSetSendingData,
  taskSetCreated
} from '../../../src/actions/task-actions';

describe("Task Actions", () => {
  it("Set the entire task to the reducer", () => {
    const taskData = {
      ...initialState.task,
      title: 'test task', userId: 1, bookId: 1, content: 'eoqmaneoqman'
    };

    const reducerAction = taskSet(taskData);

    expect(reducerAction.type).to.equal(TASK_SET);
    expect(reducerAction.task.title).to.equal(taskData.title);
    expect(reducerAction.task.userId).to.equal(taskData.userId);
    expect(reducerAction.task.bookId).to.equal(taskData.bookId);
    expect(reducerAction.task.content).to.equal(taskData.content);
  });

  it("Set the task errors to the reducer", () => {
    const errorData = {
      title: ["Can't be blank"]
    };

    const reducerAction = taskSetErrors(errorData);

    expect(reducerAction.type).to.equal(TASK_SET_ERRORS);
    expect(reducerAction.errors.title).to.contains(errorData.title[0]);
  });

  it("Set the task sending data to the reducer", () => {
    const sendingData = true;

    const reducerAction = taskSetSendingData(sendingData);

    expect(reducerAction.type).to.equal(TASK_SET_SENDING_DATA);
    expect(reducerAction.sendingData).to.equal(sendingData);
  });

  it("Set the task created to the reducer", () => {
    const created = true;

    const reducerAction = taskSetCreated(created);

    expect(reducerAction.type).to.equal(TASK_SET_CREATED);
    expect(reducerAction.created).to.equal(created);
  });
});
