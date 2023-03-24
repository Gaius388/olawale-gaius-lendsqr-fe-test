import React from "react";
import { BsFilter } from "react-icons/bs";
const Filter = ({ toggleFilterPop }) => {
  return (
    <section className="border">
      <div className="grid grid-cols-moreButton uppercase justify-items-center content-center">
        <main className="flex gap-1 items-center py-2">
          <h2 className="text-sm 2xl:text-md">organization</h2>
          <BsFilter className="2xl:text-2xl cursor-pointer" onClick={toggleFilterPop} />
        </main>
        <main className="flex gap-1 items-center py-2">
          <h2 className="text-sm 2xl:text-md">username</h2>
          <BsFilter className="2xl:text-2xl cursor-pointer" onClick={toggleFilterPop} />
        </main>
        <main className="flex gap-1 items-center py-2">
          <h2 className="text-sm 2xl:text-md">email</h2>
          <BsFilter className="2xl:text-2xl cursor-pointer" onClick={toggleFilterPop} />
        </main>
        <main className="flex gap-1 items-center py-2">
          <h2 className="text-sm 2xl:text-md">phone number</h2>
          <BsFilter className="2xl:text-2xl cursor-pointer" onClick={toggleFilterPop} />
        </main>
        <main className="flex gap-1 items-center py-2">
          <h2 className="text-sm 2xl:text-md">date joined</h2>
          <BsFilter className="2xl:text-2xl cursor-pointer" onClick={toggleFilterPop} />
        </main>
        <main className="flex gap-1 items-center py-2">
          <h2 className="text-sm 2xl:text-md">status</h2>
          <BsFilter className="2xl:text-2xl cursor-pointer" onClick={toggleFilterPop} />
        </main>
      </div>
    </section>
  );
};

export default Filter;
