import React from "react";
import homeIcon from "../images/home 1.svg";
import briefcase from "../images/briefcase 1.svg";
import { FiChevronDown } from "react-icons/fi";
import { customers, settings, business } from "../data";

const SideMenu = () => {
  return (
    <div className="capitalize pt-8 2xl:text-xl">
      <section className="flex gap-3 items-center mb-8 opacity-80 px-5 2xl:px-8">
        <img src={briefcase} alt="switch" />
        <h2>switch organization</h2>
        <FiChevronDown />
      </section>
      <section className="flex gap-3 items-center mb-6 opacity-80 px-5 2xl:px-8">
        <img src={homeIcon} alt="switch" />
        <h2>dashboard</h2>
      </section>
      <section className="mb-6">
        <p className="uppercase font-semibold pb-4 opacity-70 px-5 2xl:px-8">customers</p>
        {customers.map((customer, index) => {
          const { description, img, active } = customer;
          return (
            <div
              className={`flex gap-3 items-center mb-4 opacity-50 px-5 2xl:px-8 py-2 ${
                active ? "bg-lendsqr2 w-full" : ""
              }`}
              key={index}
            >
              <img src={img} alt="switch" />
              <h2>{description}</h2>
            </div>
          );
        })}
      </section>
      <section className="mb-6">
        <p className="uppercase font-semibold pb-4 opacity-70 px-5 2xl:px-8">business</p>
        {business.map((customer, index) => {
          const { description, img, active } = customer;
          return (
            <div
              className={`flex gap-3 items-center mb-4 opacity-50 px-5 2xl:px-8 py-2 ${
                active ? "bg-lendsqr2" : ""
              }`}
              key={index}
            >
              <img src={img} alt="switch" />
              <h2>{description}</h2>
            </div>
          );
        })}
      </section>
      <section className="mb-6">
        <p className="uppercase font-semibold pb-4 opacity-70 px-5 2xl:px-8">settings</p>
        {settings.map((customer, index) => {
          const { description, img, active } = customer;
          return (
            <div
              className={`flex gap-3 items-center mb-4 opacity-50 px-5 2xl:px-8 py-2 ${
                active ? "bg-lendsqr2" : ""
              }`}
              key={index}
            >
              <img src={img} alt="switch" />
              <h2>{description}</h2>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default SideMenu;
