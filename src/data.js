import briefcase from "./images/briefcase 1.svg";
import users from "./images/user-friends 1.svg";
import guarantors from "./images/users 1.svg";
import loans from "./images/sack 1.svg";
import deal from "./images/handshake-regular 1.svg";
import savings from "./images/piggy-bank 1.svg";
import loanRequest from "./images/Group 104.svg";
import whitelist from "./images/user-check 1.svg";
import karma from "./images/user-times 1.svg";
import savingsProduct from "./images/Group.svg";
import fees from "./images/coins-solid 1.svg";
import transactions from "./images/icon.svg";
import services from "./images/galaxy 1.svg";
import serviceAcct from "./images/user-cog 1.svg";
import settlements from "./images/scroll 1.svg";
import reports from "./images/chart-bar 2.svg";
import preferences from "./images/sliders-h 1.svg";
import feesPercent from "./images/badge-percent 1.svg";
import logs from "./images/clipboard-list 1.svg";

export const customers = [
  {
    description: "users",
    img: users,
    active: true,
  },
  {
    description: "guarantors",
    img: guarantors,
    active: false,
  },
  {
    description: "loans",
    img: loans,
    active: false,
  },
  {
    description: "decision models",
    img: deal,
    active: false,
  },
  {
    description: "savings",
    img: savings,
    active: false,
  },
  {
    description: "loan requests",
    img: loanRequest,
    active: false,
  },
  {
    description: "whitelist",
    img: whitelist,
    active: false,
  },
  {
    description: "karma",
    img: karma,
    active: false,
  },
];

export const business = [
  {
    description: "organization",
    img: briefcase,
    active: false,
  },
  {
    description: "loan products",
    img: loanRequest,
    active: false,
  },
  {
    description: "savings products",
    img: savingsProduct,
    active: false,
  },
  {
    description: "fees and charges",
    img: fees,
    active: false,
  },
  {
    description: "transactions",
    img: transactions,
    active: false,
  },
  {
    description: "services",
    img: services,
    active: false,
  },
  {
    description: "service account",
    img: serviceAcct,
    active: false,
  },
  {
    description: "settlements",
    img: settlements,
    active: false,
  },
  {
    description: "reports",
    img: reports,
    active: false,
  },
];

export const settings = [
  {
    description: "preferences",
    img: preferences,
  },
  {
    description: "fees and pricing",
    img: feesPercent,
  },
  {
    description: "audit logs",
    img: logs,
  },
];
