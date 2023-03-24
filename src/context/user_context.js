import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/user_reducer";
import {
  GET_USER_BEGIN,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  GET_SINGLE_USER_BEGIN,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_ERROR,
} from "../action";

const initialState = {
  users_loading: false,
  users_error: false,
  users: [],
  single_users_loading: false,
  single_users_error: false,
  single_user: [],
};

const UsersContext = React.createContext();

export const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchUserList = async () => {
    dispatch({ type: GET_USER_BEGIN });
    try {
      const response = await fetch(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );
      const data = await response.json();
      dispatch({ type: GET_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_USER_ERROR });
    }
  };
  const fetchSingleUser = async (url) => {
    dispatch({ type: GET_SINGLE_USER_BEGIN });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: GET_SINGLE_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_SINGLE_USER_ERROR });
    }
  };

  useEffect(() => {
    fetchSingleUser(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/3`
    );
    fetchUserList();
  }, []);

  return (
    <UsersContext.Provider value={{ ...state, fetchSingleUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsersContext = () => {
  return useContext(UsersContext);
};
