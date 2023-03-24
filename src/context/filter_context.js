import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/filter_reducer";
import { useUsersContext } from "./user_context";

import {
  LOAD_PRODUCTS,
  UPDATE_FILTERS,
  CLEAR_FILTERS,
  SET_DATA,
  PREV_PAGE,
  NEXT_PAGE,
  HANDLE_PAGE_CHANGE,
  FILTER_ACTIVE,
  HANDLE_SEARCH,
  UPDATE_SEARCH,
} from "../action";
const initialState = {
  filtered_products: [],
  all_products: [],
  filters: {
    organization: "select",
    username: "",
    email: "",
    phoneNumber: "",
    status: "",
  },
  search: "",
  paginateData: [],
  currentPage: 0,
  loading: false,
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { users } = useUsersContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: users });
    dispatch({ type: SET_DATA });
    dispatch({ type: HANDLE_SEARCH });
  }, [users, state.search]);

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  const updateSearch = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: UPDATE_SEARCH, payload: { name, value } });
  };
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };
  const prevPage = () => {
    dispatch({ type: PREV_PAGE });
  };
  const nextPage = () => {
    dispatch({ type: NEXT_PAGE });
  };
  const handlePage = (url) => {
    dispatch({ type: HANDLE_PAGE_CHANGE, payload: url });
  };

  const filterClick = () => {
    dispatch({ type: FILTER_ACTIVE });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateFilters,
        updateSearch,
        clearFilters,
        prevPage,
        nextPage,
        handlePage,
        filterClick,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
