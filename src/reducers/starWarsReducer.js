import { FETCH_STARWARSCHARS_FAIL, FETCH_STARWARSCHARS_SUCCESS, FETCH_STARWARSCHARS_START } from "../actions";
const initialState = {
  characters: [],
  isFetching: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STARWARSCHARS_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case FETCH_STARWARSCHARS_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isFetching: false,
        error: ''
      }
    case FETCH_STARWARSCHARS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
