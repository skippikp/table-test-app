import { SET_PERSONS, SET_SEARCH_PARAM } from '../constants/constants';

const initialState = {
  persons: [],
  personsPerPage: 10,
  searchParam: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PERSONS:
      return {
        ...state,
        persons: action.payload,
      };
    case SET_SEARCH_PARAM:
      return {
        ...state,
        searchParam: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
