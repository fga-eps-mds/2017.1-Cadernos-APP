import { shallow } from 'enzyme';
import { expect } from 'chai';

import {
  LOGIN_SET_REMEMBER
} from '../../../src/config/actions-types';

import {
  setLoginRemember
} from '../../../src/actions/login-actions';

import initialState from '../../../src/config/initial-state';

import { loginReducer } from '../../../src/reducers';

describe("Login reducer", () => {
  it("set login remember", () => {
    let login = {
      remember: false
    }

    login = loginReducer(login, setLoginRemember(true));
    expect(login.remember).to.eq(true);
  });

  it("convert non boolean data into boolean", () => {
    let login = {
      remember: true
    }

    login = loginReducer(login, setLoginRemember(null));
    expect(login.remember).to.eq(false);

    login = loginReducer(login, setLoginRemember(""));
    expect(login.remember).to.eq(false);

    login = loginReducer(login, setLoginRemember(1));
    expect(login.remember).to.eq(true);

    login = loginReducer(login, setLoginRemember("null"));
    expect(login.remember).to.eq(true);
  });
});