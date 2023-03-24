import React from "react";
import { useFilterContext } from "../context/filter_context";

// const getUniqueValues = (data, type) => {
//   let unique = data.map((item) => item[type]);
//   return ["all", ...new Set(unique)];
// };

const FilterPop = ({ filterOpen, toggleFilterPop }) => {
  const {
    filters: { phoneNumber, username, email, organization },
    updateFilters,
    clearFilters,
    filterClick,
  } = useFilterContext();
  // const organization = getUniqueValues(all_products,'accountNumber')

  return filterOpen ? (
    <div className="absolute top-10 left-[2%]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[17rem] 2xl:w-[20rem] bg-white grid rounded-md py-6 text-lendsqr1 border shadow-sm"
      >
        {/* organization */}
        <div className="w-5/6 mx-auto mb-4">
          <label className="text-md 2xl:text-xl">Organization</label>
          <select
            name="organization"
            value={organization}
            onChange={updateFilters}
            className="p-1 2xl:p-2 w-full rounded-md border-2 border-gray-200 mt-1"
          >
            <option value="">Select</option>
            <option value="lendsqr">Lendsqr</option>
          </select>
        </div>
        {/* end of organization */}
        {/* username */}
        <div className="w-5/6 mx-auto mb-4">
          <label className="text-md 2xl:text-xl">Username</label>
          <input
            type="text"
            name="username"
            placeholder="User"
            className="p-1 2xl:p-2 w-full rounded-md border-2 border-gray-200 mt-1"
            value={username}
            onChange={updateFilters}
          />
        </div>
        {/* end of username */}
        {/* username */}
        <div className="w-5/6 mx-auto mb-4">
          <label className="text-md 2xl:text-xl">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="p-1 2xl:p-2 w-full rounded-md border-2 border-gray-200 mt-1"
            value={email}
            onChange={updateFilters}
          />
        </div>
        {/* end of username */}
        {/* phoneNumber */}
        <div className="w-5/6 mx-auto mb-4">
          <label className="text-md 2xl:text-xl">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            className="p-1 2xl:p-2 w-full rounded-md border-2 border-gray-200 mt-1"
            value={phoneNumber}
            onChange={updateFilters}
          />
        </div>
        {/* end of phoneNumber */}
        {/* status */}
        <div className="w-5/6 mx-auto mb-4">
          <label className="text-md 2xl:text-xl">Status</label>
          <select
            name="status"
            className="p-1 2xl:p-2 w-full rounded-md border-2 border-gray-200 mt-1"
          ></select>
        </div>
        {/* end of status */}

        {/* Reset and Filter */}
        <div className="flex text-md 2xl:text-xl font-semibold w-5/6 mx-auto justify-between">
          <p
            className="py-2 px-7 rounded-lg text-lendsqr1 border-2 border-lendsqr1 cursor-pointer"
            onClick={() => {
              toggleFilterPop();
              clearFilters();
            }}
          >
            Reset
          </p>
          <p
            className="py-2 px-7 rounded-lg text-white bg-lendsqr2 cursor-pointer"
            onClick={() => {
              toggleFilterPop();
              filterClick();
            }}
          >
            Filter
          </p>
        </div>
        {/* End of Reset and Filter */}
      </form>
    </div>
  ) : (
    ""
  );
};

export default FilterPop;
