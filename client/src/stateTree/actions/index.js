import axios from 'axios';

export const GET_START = 'GET_START';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAIL = 'GET_FAIL';




export const getNotes = () => dispatch => {
    dispatch({
        type: GET_START
    })
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        dispatch({
            type: GET_SUCCESS,
            payload: response.data,
        })
    })
      .catch(error => {
        dispatch({
            type: GET_FAIL,
            payload: error.message,
        })
    })
}
  