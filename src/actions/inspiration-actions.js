import axios from '../config/axios';

export const asyncSetInspiration = (data) => {
  return (dispatch) => {
    axios.post("/inspirations",{
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