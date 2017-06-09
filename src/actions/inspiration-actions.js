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

export const asyncUpdateInspirations = (data) => {
  return (dispatch) => {
    axios.get(`/books/${data}/inspirations`)
      .then(response => {
        dispatch(setInspirations(response.data));
      })
      .catch(err => {
        console.log("Error while updating inspirations list");
        console.log(err);
      });
  }
}

export const asyncSetInspiration = (data, callback) => {
  return (dispatch) => {
    axios.post("/inspirations", {
      primary_id: data.primary.id,
      inspirational_id: data.inspirational.id
    })
      .then(response => {
        dispatch(asyncUpdateInspirations(response.data.primary_id))
        callback(true)
      })
      .catch(err => {
        callback(false)
        console.log("Error while setting inspirations");
        console.log(err);
      });
  }
}

export const asyncDeleteInspiration = (data, callback, book_id) => {
  return (dispatch) => {
    axios.delete(`/inspirations/${data}`)

      .then(response => {
        console.log("deletado com sucesso!")
        dispatch(asyncUpdateInspirations(book_id))
        callback(true)
      })
      .catch(err => {
        callback(false)
        console.log("Error while deleting inspiration");
        console.log(err);
      });
  }
}