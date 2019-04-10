import Axios from "axios"

export const GET_START = "GET_START"
export const GET_SUCCESS = "GET_SUCCESS"
export const GET_FAIL = "GET_FAIL"
export const SET_PROPERTY_ADDRESS = "SET_PROPERTY_ADDRESS"

const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL

export const getQuestions = () => dispatch => {
  dispatch({
    type: GET_START
  })
  Axios.get(SERVER_BASE_URL + "/api/questions")
    .then(response => {
      console.log({ response })
      dispatch({
        type: GET_SUCCESS,
        payload: response
      })
    })
    .catch(error => {
      dispatch({
        type: GET_FAIL,
        payload: error.message
      })
    })
}

export const setPropertyAddress = address => ({
  type: SET_PROPERTY_ADDRESS,
  payload: address
})
