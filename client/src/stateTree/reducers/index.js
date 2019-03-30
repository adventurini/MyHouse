import {
    GET_START,
    GET_SUCCESS,
    GET_FAIL,
} from '../actions';
    
const initialState = {
    notes: [],
    targetProperty: {},
}
  
const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_START:
            return {
                ...state,
                creatingNote: false,
                fetchingNote: true,
                targetNote:'',
                newNote:false,
                error: null,
            }
        case GET_SUCCESS:
            return {
                ...state,
                notes:action.payload,
                creatingNote: false,
                fetchingNote: false,
                newNote:false,
                editingNote:false,
                error: null,
            }
        case GET_FAIL:
            return {
                ...state,
                creatingNote:false,
                newNote:false,
                error: action.payload,
            }
        default:
            return state;
    }
  }
  
  export default rootReducer
  