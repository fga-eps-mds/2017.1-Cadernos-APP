import { expect } from 'chai';

import {
  TASKS_SET
} from '../../../src/config/actions-types' ;


import taskReducer from '../../../src/reducers/tasks-reducer';

describe("Tasks reducer", () => {
  it("set tasks", () => {
    let tasks = []

    tasks = taskReducer(tasks, {
      type: TASKS_SET,
      tasks: [{id: 3}, {id: 7}]
    });

    expect(tasks.length).to.eq(2);
  });
})
