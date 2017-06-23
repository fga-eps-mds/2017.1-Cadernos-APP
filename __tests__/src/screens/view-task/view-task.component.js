import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

import ViewTaskComponent from '../../../../src/screens/view-task/view-task.component';

import {
  Button
} from 'native-base';

describe("ViewTask Component", () => {
  const commom = {
    task: {
      id: 7,
      bookId: 9,
      user: {
        id: 5,
        name: "heuheuhe"
      },
      title: "One task to task then all",
      content: "None shall task !"
    },

    goToEditTask(task) {}
  }

  const wrapper = shallow(
    <ViewTaskComponent
      {...commom}
    />
  );

  it("Have one view", () => {
    expect(wrapper.length).to.equal(1);
  });

  it("has a button that goto edit task page", () => {
    let button = wrapper.findWhere(c => c.key() === "gotoEditTaskButton");

    expect(button.length).to.eq(1);
    button.simulate("press");
  });

  it("has a button that get the user confirmation", () => {
    let button = wrapper.findWhere(c => c.key() === "getUserConfirmationButton");

    expect(button.length).to.eq(1);
    button.simulate("press");
  })
});
