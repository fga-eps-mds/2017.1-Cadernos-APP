import axios from '../config/axios';
import { INSPIRATIONS_SET } from '../config/actions-types';

export const setInspirations = (inspirations = []) => {
  return {
    type: INSPIRATIONS_SET,
    inspirations
  }
}

export const asyncGetInspirations = (data) => {
  return (dispatch) => {
    axios.get(`/books/${data.id}/inspirations`)
      .then(response => {
        dispatch(setInspirations(response.data));
      })
      .catch(err => {
        console.log("Error while getting inspirations");
        console.log(err);
      });
  }
}

export const asyncSetInspiration = (data) => {
  return (dispatch) => {
    axios.post("/inspirations", {
      primary_id: data.primary.id,
      inspirational_id: data.inspirational.id
    })
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.log("Error while setting inspirations");
        console.log(err);
      });
  }
}