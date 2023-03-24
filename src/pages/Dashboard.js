import React from "react";
import logo from "../images/Union.svg";
import SideMenu from "../components/SideMenu";
import { CiSearch } from "react-icons/ci";
import { BsBell } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import profileImage from "../images/image 4.png";
import { Outlet } from "react-router-dom";
import { useFilterContext } from "../context/filter_context";

const Dashboard = () => {
  const {updateSearch,search} = useFilterContext()
  return (
    <div>
      <section className="h-[15vh] border px-8 flex items-center justify-between shadow-sm">
        <div className="flex gap-2">
          <img src={logo} alt="logo" />
          <span className="text-lendsqr1 text-3xl font-bold">lendsqr</span>
        </div>
        <div className="w-[20rem] flex">
          <input
            name="search"
            value={search}
            onChange={updateSearch}
            placeholder="Search for anything"
            className="placeholder:pl-2 placeholder:text-sm border w-5/6 py-1.5 rounded-l-lg outline-none pl-2"
          />
          <div className="border w-1/6 mx-auto h-auto bg-lendsqr2 text-white flex justify-center items-center rounded-r-lg">
            <CiSearch className="text-xl" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="underline">Docs</p>
          <BsBell />
          <div className="flex items-center gap-2">
            <img
              src={profileImage}
              alt="profile"
              className="w-9 rounded-full"
            />
            <p>Adedeji</p>
            <FiChevronDown />
          </div>
        </div>
      </section>
      <section className="grid grid-cols-dashboard">
        <SideMenu />
        <Outlet/>
      </section>
    </div>
  );
};

export default Dashboard;
