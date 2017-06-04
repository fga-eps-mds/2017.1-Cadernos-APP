import { INVITES_SET } from '../config/actions-types';

import axios from '../config/axios';

export const asyncInviteSet = (inviteData, callback) => {
  return (dispatch) => {
    axios.post("/invites",{
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