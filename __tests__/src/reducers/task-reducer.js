import { expect } from 'chai';

import {
  TASKS_SET,
  TASKS_DELETE,
  TASKS_ADD
} from '../../../src/config/actions-types';


import taskReducer from '../../../src/reducers/tasks-reducer';

describe("Tasks reducer", () => {
  it("set tasks", () => {
    let tasks = []

    tasks = taskReducer(tasks, {
      type: TASKS_SET,
      tasks: [{ id: 3 }, { id: 7 }]
    });

    expect(tasks.length).to.eq(2);
  });

  it("Delete tasks", () => {
    let tasks = [
      { id: 3 }, { id: 7 }
    ]

    tasks = taskReducer(tasks, {
      type: TASKS_DELETE,
      task: { id: 7 }
    });

    expect(tasks.length).to.eq(1);
    expect(tasks[0].id).to.eq(3);
  });

  it("Add tasks", () => {
    let tasks = [
      { id: 3 }
    ]

    tasks = taskReducer(tasks, {
      type: TASKS_ADD,
      task: { id: 7 }
    });

    expect(tasks.length).to.eq(2);
    expect(tasks[1].id).to.eq(7);
  });

})
