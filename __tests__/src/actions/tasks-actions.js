import { shallow } from 'enzyme';
import { expect } from 'chai';

import {
  TASKS_SET,
  TASKS_DELETE,
  TASKS_ADD,
  TASKS_UPDATE
} from '../../../src/config/actions-types';

import initialState from '../../../src/config/initial-state';

import {
  setTasks,
  taskDelete,
  taskAdd,
  taskUpdate,

} from '../../../src/actions/tasks-actions';

describe("Task Actions", () => {
  it("Set the entire task to the reducer", () => {
    let tasksData = [{id:4}];  // tasksData is undefined because in the initialState array is empty
    const reducerAction = setTasks(tasksData);

    expect(reducerAction.type).to.equal(TASKS_SET);
    expect(reducerAction.tasks.length).to.equal(1);
  });
  it ("Delete the tasks to the Reducer ", () => {
      const taskDeleted = {id: 9}
      const reducerAction = taskDelete(taskDeleted);

      expect(reducerAction.type).to.equal(TASKS_DELETE);
      expect(reducerAction.task).to.equal(taskDeleted);
  });
  it ("Set the add task to the reducer", () => {

  })
})
