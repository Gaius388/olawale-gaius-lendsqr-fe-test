import React, { useState } from "react";
import user from "../images/users_icon.svg";
import activeUser from "../images/active-user_icon.svg";
import loanUser from "../images/loan-users_icon.svg";
import savingsUser from "../images/savings-user_icon.svg";
import Filter from "./Filter";
import UserList from "./UserList";
import FilterPop from "./FilterPop";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useFilterContext } from "../context/filter_context";

const Users = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const toggleFilterPop = () => {
    setFilterOpen(!filterOpen);
  };
  const {
    prevPage,
    nextPage,
    paginateData,
    handlePage,
    currentPage,
    filtered_products,
  } = useFilterContext();

  return (
    <div className="border pt-12 px-8 pb-4">
      <h1 className="text-lendsqr1 text-2xl font-semibold">Users</h1>
      <section className="flex justify-between my-7">
        <div className="h-[9em] w-[13.5em] 2xl:w-[15em] pl-6 grid content-evenly text-lendsqr1 rounded-md shadow-md">
          <img src={user} alt="user" />
          <p className="font-medium text-sm uppercase">Users</p>
          <p className="font-bold text-2xl">2,453</p>
        </div>
        <div className="h-[9em] w-[13.5em] 2xl:w-[15em] pl-6 grid content-evenly text-lendsqr1 rounded-md shadow-md">
          <img src={activeUser} alt="activeUser" />
          <p className="font-medium text-sm uppercase"> active Users</p>
          <p className="font-bold text-2xl">2,453</p>
        </div>
        <div className="h-[9em] w-[13.5em] 2xl:w-[15em] pl-6 grid content-evenly text-lendsqr1 rounded-md shadow-md">
          <img src={loanUser} alt="loanUser" />
          <p className="font-medium text-sm uppercase">Users with loans</p>
          <p className="font-bold text-2xl">12,453</p>
        </div>
        <div className="h-[9em] w-[13.5em] 2xl:w-[15em] pl-6 grid content-evenly text-lendsqr1 rounded-md shadow-md">
          <img src={savingsUser} alt="savingsUser" />
          <p className="font-medium text-sm uppercase">Users with savings</p>
          <p className="font-bold text-2xl">102,453</p>
        </div>
      </section>
      <div className="relative">
        <FilterPop filterOpen={filterOpen} toggleFilterPop={toggleFilterPop} />
        <Filter toggleFilterPop={toggleFilterPop} />
        <UserList />
      </div>
      {filtered_products && (
        <>
          {filtered_products.length < 10 ? (
            ""
          ) : (
            <div className="flex items-center justify-between mt-6">
              <p>
                Showing{" "}
                <span className="bg-gray-300 py-1 font-semibold px-2.5 mx-1 rounded-sm">
                  {paginateData[currentPage]?.length}
                </span>
                of {filtered_products.length}
              </p>
              <div className="flex gap-2 text-lg items-center cursor-pointer">
                <BiChevronLeft
                  onClick={prevPage}
                  className="bg-gray-300 rounded-md"
                />
                {paginateData.map((item, index) => {
                  return (
                    <button
                      onClick={() => handlePage(index)}
                      className="font-semibold text-sm text-gray-500 cursor-pointer"
                      key={index}
                    >
                      {index + 1}
                    </button>
                  );
                })}
                <BiChevronRight
                  onClick={nextPage}
                  className="bg-gray-300 rounded-md cursor-pointer"
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Users;
