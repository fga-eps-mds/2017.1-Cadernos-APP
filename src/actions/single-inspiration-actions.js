import axios from '../config/axios';
import { INSPIRATION_SET } from '../config/actions-types';


export const setInspiration = (inspiration={...initialState.inspiration}) => {
  return {
    type: INSPIRATION_SET,
    inspiration
  }
}

export const asyncGetInspiration = (data, callback) => {
  return (dispatch) => {
    axios.get(`/books/${data}`)
      .then(response => {
        //console.log('@--------------------@');
        //console.log(response);
       //console.log('@--------------------@');
        dispatch(setInspiration(response.data));
        callback()
      })
      .catch(err => {
        console.log("Error while getting inspiration book");
        console.log(err);
      });
  }
}