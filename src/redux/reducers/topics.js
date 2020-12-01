import {
  SET_LOADING,
  GET_TOPICS,
} from '../actions';

const initialState = {
  loading: false,
  topics: [],
};

export default(state = initialState, {type, payload}) => {
  switch(type) {
    case SET_LOADING:
      return {
        ...state,
	       loading: true,
      };
    case GET_TOPICS:
      return {
        ...state,
        topics: payload,
        loading: false,
      };
    default:
      return state;
  }
};