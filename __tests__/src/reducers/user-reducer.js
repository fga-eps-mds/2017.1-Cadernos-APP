import { shallow } from 'enzyme';
import { expect } from 'chai';

import {
  VISITOR_LOGIN
} from '../../../src/config/actions-types';

import initialState from '../../../src/config/initial-state';

import { userReducer } from '../../../src/reducers';

describe("User Reducer", () => {
  it("Set visitor", () => {
    const user = userReducer(initialState.user, {
      type: VISITOR_LOGIN,
      isVisitor: true
    });

    expect(user.isVisitor).to.equal(true);

  });
});