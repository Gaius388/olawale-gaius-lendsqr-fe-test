import React from "react";
import welcomeImg from "../images/welcomeMan.png";
import logo from "../images/Union.svg";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <section className="grid grid-rows-2 gap-16 md:gap-4 md:grid-rows-none md:grid-cols-2 h-screen py-4 md:py-0 content-center relative">
        <div>
          <div className="flex gap-2 md:absolute md:top-[10%] md:left-[5%] ml-8">
            <img src={logo} alt="logo" />
            <span className="text-lendsqr1 text-3xl font-bold">lendsqr</span>
          </div>
          <img src={welcomeImg} alt="welcome page" />
        </div>
        <div className="grid w-5/6 mx-auto">
          <h1 className="text-4xl font-extrabold text-lendsqr1">Welcome!</h1>
          <p className="text-md">Enter details to login</p>
          <form className="grid gap-4">
            <input
              type="email"
              placeholder="Email"
              className="rounded-md border-2 pl-3 outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="rounded-md border-2 pl-3 outline-none"
            />
          </form>
          <p className="text-lendsqr2 uppercase text-xs font-bold">
            Forgot password?
          </p>
          <button className="bg-lendsqr2 text-white uppercase text-sm rounded-md font-bold">
            <Link to='/users'>Log in</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
