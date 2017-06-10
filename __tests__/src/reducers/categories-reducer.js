import { shallow } from 'enzyme';
import { expect } from 'chai';

import {
 CATEGORIES_SET

} from '../../../src/config/actions-types';

import initialState from '../../../src/config/initial-state';

import categoriesTaskReducer from '../../../src/reducers/categories-reducer';

describe("Categories reducer", () => {
  it("set categories", () => {
    let categories = []

    singleTask = categoriesTaskReducer(initialState.categories, {
      type: CATEGORIES_SET,
      categories: { id: 0 }
    });

    expect(categories.length).to.eq(0);
  });
})