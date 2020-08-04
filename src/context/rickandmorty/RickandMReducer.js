import {
  SEARCH_CHARACTERS,
  SINGLE_CHARACTER,
  CLEAR_USERS,
  SET_LOADING,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        loading: false,
      };
    case SINGLE_CHARACTER:
      return {
        ...state,
        character: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        characters: [],
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
