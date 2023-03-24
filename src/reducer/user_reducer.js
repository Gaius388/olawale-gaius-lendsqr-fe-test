import {
  GET_USER_BEGIN,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  GET_SINGLE_USER_BEGIN,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_ERROR,
} from "../action";

const user_reducer = (state, action) => {
  if (action.type === GET_USER_BEGIN) {
    return { ...state, users_loading: true, users_reducer: false };
  }
  if (action.type === GET_USER_SUCCESS) {
    return {
      ...state,
      users_loading: false,
      users: action.payload,
    };
  }
  if (action.type === GET_USER_ERROR) {
    return { ...state, users_loading: false, users_error: true };
  }
  if (action.type === GET_SINGLE_USER_BEGIN) {
    return { ...state, single_users_loading: true, single_users_error: false };
  }
  if (action.type === GET_SINGLE_USER_SUCCESS) {
    const data = action.payload
    return {
      ...state,
      single_users_loading: false,
      single_user: data,
    };
  }
  if (action.type === GET_SINGLE_USER_ERROR) {
    return { ...state, single_users_loading: false, single_users_error: true };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default user_reducer;
