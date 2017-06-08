import { shallow } from 'enzyme';
import { expect } from 'chai';

import { CATEGORIES_SET } from '../../../src/config/actions-types'

import { setCategories } from '../../../src/actions/categories-actions'

describe ("Categories Actions", () =>{
  it("Set the entire categorie to the reducer", () =>{
    const categories = [];
    const reducerAction = setCategories(categories);

    expect(reducerAction.type).to.equal(CATEGORIES_SET);
    expect(reducerAction.categories).to.equal(categories);
  })
})
