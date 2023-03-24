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

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      loading: true,
    };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_ACTIVE) {
    const { all_products } = state;
    const { username, email, phoneNumber } = state.filters;
    let tempUsers = [...all_products];
    if (username) {
      tempUsers = tempUsers.filter((users) => {
        const lowercase = users.userName.toLowerCase();
        return lowercase.startsWith(username);
      });
    }
    if (email) {
      tempUsers = tempUsers.filter((emails) => {
        return emails.email.toLowerCase().startsWith(email);
      });
    }
    if (phoneNumber) {
      tempUsers = tempUsers.filter((phones) => {
        return phones.phoneNumber.startsWith(phoneNumber);
      });
    }
    // if (organization) {
    //   tempUsers = tempUsers.filter((company) => {
    //     return company.orgName === organization;
    //   });
    // }
    return { ...state, filtered_products: tempUsers };
  }
  if (action.type === UPDATE_SEARCH) {
    const { name, value } = action.payload;
    return { ...state, [name]: value };
  }
  if (action.type === HANDLE_SEARCH) {
    const { all_products, search, paginateData, currentPage } = state;
    let tempSearch = [...all_products];
    if (search) {
      tempSearch = tempSearch.filter((searching) => {
        const lowercase = searching.userName.toLowerCase();
        return lowercase.startsWith(search);
      });
    } else if (search.length < 1) {
      return { ...state, filtered_products: paginateData[currentPage] };
    }
    return { ...state, filtered_products: tempSearch };
  }
  if (action.type === CLEAR_FILTERS) {
    const { paginateData, currentPage } = state;
    return {
      ...state,
      filtered_products: paginateData[currentPage],
      filters: { ...state.filters, username: "", email: "", phoneNumber: "" },
    };
  }
  if (action.type === SET_DATA) {
    const { all_products, currentPage } = state;
    const paginateUsers = [...all_products];
    const itemsPerPage = 10;
    const noOfPages = Math.ceil(paginateUsers.length / itemsPerPage);
    const newHouses = Array.from({ length: noOfPages }, (_, index) => {
      const start = index * itemsPerPage;
      return paginateUsers.slice(start, start + itemsPerPage);
    });

    return {
      ...state,
      paginateData: newHouses,
      filtered_products: newHouses[currentPage],
      loading: false,
    };
  }
  if (action.type === PREV_PAGE) {
    const { paginateData, currentPage } = state;
    let prevPage = state.currentPage - 1;
    if (prevPage < 0) {
      prevPage = paginateData.length - 1;
    }
    return {
      ...state,
      currentPage: prevPage,
      filtered_products: paginateData[currentPage],
    };
  }
  if (action.type === NEXT_PAGE) {
    const { paginateData, currentPage } = state;
    let nextPage = state.currentPage + 1;
    if (nextPage > paginateData.length - 1) {
      nextPage = 0;
    }
    return {
      ...state,
      currentPage: nextPage,
      filtered_products: paginateData[currentPage],
    };
  }
  if (action.type === HANDLE_PAGE_CHANGE) {
    const { paginateData } = state;
    return { ...state, filtered_products: paginateData[action.payload] };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
