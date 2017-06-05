import { CATEGORIES_SET } from '../config/actions-types';

import axios from '../config/axios';

export const setCategories = (categories=[]) => {
  return {
    type: CATEGORIES_SET,
    categories
  }
}

export const asyncSetCategories = () => {
  return (dispatch) => {
    axios.get("/categories")
      .then(response => {
        dispatch(setCategories(response.data));
      })
      .catch(err => {
        console.log("Error while getting categories");
        console.log(err);
      });
  }
}