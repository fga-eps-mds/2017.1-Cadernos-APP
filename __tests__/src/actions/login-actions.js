import { shallow } from 'enzyme';
import { expect } from 'chai';

import {
  LOGIN_SET_REMEMBER
} from '../../../src/config/actions-types';

import {
  setLoginRemember
} from '../../../src/actions/login-actions';

describe("Login Actions", () => {
  it("sets login remember", () => {
    let action = setLoginRemember(false);

    expect(action.type).to.eq(LOGIN_SET_REMEMBER);
    expect(action.remember).to.eq(false);

    action = setLoginRemember(true);

    expect(action.type).to.eq(LOGIN_SET_REMEMBER);
    expect(action.remember).to.eq(true);
  });
});