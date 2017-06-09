import { MEMBERSHIPS_SET } from '../config/actions-types';

import axios from '../config/axios';


export const setMemberships = (memberships = []) => {
  return {
    type: MEMBERSHIPS_SET,
    memberships
  }
}

export const asyncMembershipSet = (inviteData, user, callback) => {
  return (dispatch) => {
    axios.post('/memberships', {
      email: user.email,
      book_id: inviteData.book_id,
    })
      .then(response => {
        callback(true)
      })
      .catch(err => {
        callback(false)
        console.log("Error while creating membership");
        console.log(err);
      });
  }
}

export const asyncMembershipGet = (book) => {
  return (dispatch) => {
    axios.get(`/books/${book.id}/members`)
      .then(response => {
        dispatch(setMemberships(response.data));
        console.log(response.data);
      })
      .catch(err => {
        console.log(`Error while getting members of book`);
        console.log(err);
      });

    //dispatch(setTasks(tasks));
  }
}

export const asyncMembershipDelete = (key, book) => {
  return (dispatch) => {
    axios.delete(`/memberships/${key}`)
      .then(response => {
        console.log(response.data);
        dispatch(asyncMembershiṕGet(book));
      })
      .catch(err => {
        console.log(`Erro while deleting tasks of book`);
        console.log(err);
      });

    //dispatch(setTasks(tasks));
  }
}