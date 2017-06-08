import { shallow } from 'enzyme';
import { expect } from 'chai';

import {
    SINGLE_TASK_SET,
    SINGLE_TASK_SENDING_DATA,
    SINGLE_TASK_CLEAR
} from '../../../src/config/actions-types';

import initialState from '../../../src/config/initial-state';

import { setSingleTask, setSingleTaskSendingData } from '../../../src/actions/single-task-actions';

describe("Single Task Actions", () => {
  it("Set the entire single task to the reducer", () => {
    const singleTaskData = [{
      id: 0,
      title: "",
      content: "",
      book_id: 0,
      user_id: 0,
      category_id: 0,
      documents: [],
      images: [],
      user: {},
      sendingData: false,
      errors: {} }];
    const reducerAction = setSingleTask(singleTaskData);

    expect(reducerAction.type).to.equal(SINGLE_TASK_SET);
    expect(reducerAction.singleTask).to.equal(singleTaskData);
  });
  it("Set a single task to the reducer", () => {
    const reducerAction = setSingleTaskSendingData(true);

    expect(reducerAction.type).to.equal(SINGLE_TASK_SENDING_DATA);
    expect(reducerAction.sendingData).to.equal(true);
  });
});
