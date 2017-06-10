import { shallow } from 'enzyme';
import { expect } from 'chai';

import {
  INVITES_SET
} from '../../../src/config/actions-types';

import {
  setInvites
} from '../../../src/actions/invite-actions';

describe("Invite Actions", () => {
  it("sets invites", () => {
    const invites = [];
    let action = setInvites(invites);

    expect(action.type).to.eq(INVITES_SET);
    expect(action.invites).to.eq(invites);
  });
});