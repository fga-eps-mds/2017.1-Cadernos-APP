import { shallow } from 'enzyme';
import { expect } from 'chai';

import {
  SINGLE_TASK_SET,
  SINGLE_TASK_SENDING_DATA,
  SINGLE_TASK_CLEAR

} from '../../../src/config/actions-types';

import initialState from '../../../src/config/initial-state';

import singleTaskReducer from '../../../src/reducers/single-task-reducer';

describe("Single Tasks reducer", () => {
  it("set tasks", () => {
    let singleTask = []

    singleTask = singleTaskReducer(initialState.singleTask, {
      type: SINGLE_TASK_SET,
      singleTask: { id: 0 }
    });

    expect(singleTask.id).to.eq(0);
  });
  it("Set sendingData single_task", () => {
    let singleTask = singleTaskReducer(initialState.singleTask, {
      type: SINGLE_TASK_SENDING_DATA,
      sendingData: true
    });

    expect(singleTask.sendingData).to.equal(true);
  });
  it("Set sendingData single_task_clear", () => {
    let singleTask = singleTaskReducer(initialState.singleTask, {
      type: SINGLE_TASK_CLEAR,

    });

    expect(singleTask.sendingData).to.equal();
  });

})

