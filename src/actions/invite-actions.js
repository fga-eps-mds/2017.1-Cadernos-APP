import { INVITES_SET } from '../config/actions-types';

import axios from '../config/axios';


export const setInvites = (invites = []) => {
  return {
    type: INVITES_SET,
    invites
  }
}

export const asyncInviteSet = (inviteData, callback) => {
  return (dispatch) => {
    axios.post("/invites", {
      email: inviteData.email,
      book_id: inviteData.book_id,
      sender_id: inviteData.sender_id
    })
      .then(response => {
        callback(true);
      })
      .catch(err => {
        callback(false)
        console.log("Error while sending invite");
        console.log(err);
      });
  }
}

export const asyncInviteGet = (user) => {
  return (dispatch) => {
    axios.get(`/users/${user.id}/invites`)
      .then(response => {
        dispatch(setInvites(response.data));
        console.log(response.data);
      })
      .catch(err => {
        console.log(`Erro while getting tasks of book`);
        console.log(err);
      });

    //dispatch(setTasks(tasks));
  }
}

export const asyncInviteDelete = (key, user) => {
  return (dispatch) => {
    axios.delete(`/invites/${key}`)
      .then(response => {
        console.log(response.data);
        dispatch(asyncInviteGet(user));
      })
      .catch(err => {
        console.log(`Erro while deleting tasks of book`);
        console.log(err);
      });

    //dispatch(setTasks(tasks));
  }
}