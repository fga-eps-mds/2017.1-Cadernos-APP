import { shallow } from 'enzyme';
import { expect } from 'chai';

import {
  MEMBERSHIPS_SET
} from '../../../src/config/actions-types';

import {
  setMemberships
} from '../../../src/actions/memberships-actions';

describe("Membership Actions", () => {
  it("sets memberships", () => {
    const memberships = [];
    let action = setMemberships(memberships);

    expect(action.type).to.eq(MEMBERSHIPS_SET);
    expect(action.memberships).to.eq(memberships);
  });
});