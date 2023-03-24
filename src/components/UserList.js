import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useFilterContext } from "../context/filter_context";

const UserList = () => {
  const { filtered_products: users } = useFilterContext();
  const phoneConstruct = (number) => {
    if (number.includes("x")) {
      return number.substr(0, 13);
    } else {
      return number;
    }
  };

  if (!users) {
    <div>...Loading</div>
  }

  return (
    <section className="">
      {users &&
        users.map((list) => {
          const { email, userName, phoneNumber, createdAt, id } = list;
          const date = new Date(createdAt);
          const newDate = date.toUTCString();
          const randomNumber = Math.floor(Math.random() * 4) + 1;
          return (
            <Link to={`/users/${id}`} key={id}>
              <div className="grid grid-cols-moreButton uppercase justify-items-center items-center text-[0.65rem] 2xl:text-xs capitalize text-lendsqr1 font-normal py-3 border-b-indigo-100 border border-transparent">
                <p>Lendsqr</p>
                <p className="lowercase">{userName}</p>
                <p className="lowercase">{email}</p>
                <p>{phoneConstruct(phoneNumber)}</p>
                <p>{newDate}</p>
                {randomNumber === 1 && (
                  <p className="bg-gray-400 text-white px-2.5 py-1 rounded-3xl">
                    Inactive
                  </p>
                )}
                {randomNumber === 2 && (
                  <p className="bg-red-200 text-red-800 px-2.5 py-1 rounded-3xl">
                    Blacklisted
                  </p>
                )}
                {randomNumber === 3 && (
                  <p className="bg-teal-200 text-teal-800 px-2.5 py-1 rounded-3xl">
                    Active
                  </p>
                )}
                {randomNumber === 4 && (
                  <p className="bg-yellow-100 text-yellow-800 px-2.5 py-1 rounded-3xl">
                    Pending
                  </p>
                )}

                <FiMoreVertical className="text-xl" />
              </div>
            </Link>
          );
        })}
    </section>
  );
};

export default UserList;
