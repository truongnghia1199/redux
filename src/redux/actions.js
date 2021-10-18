import axios from "axios"
import * as types from "./actionType"


const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users
})

// const deleteUsers = () => ({
//   type: types.DELETE_USER,
//   payload: users
// })

export const loadUsers = () => {
  return function (dispatch) {
    axios.get(`${process.env.REACT_APP_API}`)
    .then((resp) => {
      console.log("resp", resp)
      dispatch(getUsers(resp.data))
    })
    .catch((error) => console.log(error) )
  }
}

// export const deleteUsers = (id) => {
//   return function (dispatch) {
//     axios.delete(`${process.env.REACT_APP_API}${id}`)
//     .then((resp) => {
//       console.log("resp", resp)
//       dispatch(userDeleted())
//     })
//     .catch((error) => console.log(error) )
//   }
// }