import { shallow } from 'enzyme';
import { expect } from 'chai';

import {
  VISITOR_LOGIN,
  USER_SET,
  USER_SENDING_DATA,
  USER_REGISTER

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


  it("Sending_data user", () => {
    const user = userReducer(initialState.user, {
      type: USER_SENDING_DATA,
      sendingData: true
    });

    expect(user.sendingData).to.equal(true);
  });

  it("Set user_registre", () => {
    const user = userReducer(initialState.user, {
      type: USER_REGISTER,
       isRegistered: true
    });

    expect(user. isRegistered).to.equal(true);

  });

})