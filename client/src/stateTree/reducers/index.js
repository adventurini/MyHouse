import { combineReducers } from "redux"
import {
  GET_START,
  GET_SUCCESS,
  GET_FAIL,
  SET_PROPERTY_ADDRESS
} from "../actions"

const questions = (state = [], action) => {
  switch (action.type) {
    case GET_SUCCESS:
      return [...state, action.payload]
    default:
      return state
  }
}

const error = (state = null, action) => {
  switch (action.type) {
    case GET_FAIL:
      return action.payload
    default:
      return state
  }
}

const targetProperty = (state = {}, action) => {
  switch (action.type) {
    case SET_PROPERTY_ADDRESS:
      return { ...state, address: action.payload }
    default:
      return state
  }
}

export default combineReducers({ questions, error, targetProperty })
