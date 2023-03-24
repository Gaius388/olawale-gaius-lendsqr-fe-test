import React, { useEffect } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import SingleUserGeneral from "./SingleUserGeneral";
import SingleUserSummary from "./SingleUserSummary";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useUsersContext } from "../context/user_context";

const SingleUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const url = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/`;

  const {
    single_users_loading: loading,
    single_users_error: error,
    fetchSingleUser,
  } = useUsersContext();

  useEffect(() => {
    fetchSingleUser(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  const amountInThousand = (amount) => {
    const thousands = amount * 1000;
    const figureInThousand = Math.trunc(thousands);
    const addCommas = figureInThousand.toLocaleString("en-US");
    return addCommas;
  };
  const phoneConstruct = (number) => {
    if (number.includes("x")) {
      return number.substr(0, 13);
    } else {
      return number;
    }
  };
  const emailAddress = (mail) => {
    if (mail.length >= 20) {
      return mail.slice(0, -7);
    } else {
      return mail;
    }
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate.push("/users");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);
  if (loading) {
    return <div className="3xl">Loading...</div>;
  }
  if (error) {
    return <div className="3xl">Error...</div>;
  }
  return (
    <div className="border px-8 pb-8">
      <div className="flex items-center gap-2 pt-12 pb-5">
        <HiOutlineArrowNarrowLeft />
        <Link to="/users">
          <span className="text-sm">Back to Users</span>
        </Link>
      </div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-lendsqr1 text-xl font-semibold">User Details</h1>
        <div className="uppercase flex text-sm font-semibold gap-3">
          <p className="py-2 px-4 border rounded-lg text-red-500 border-red-500">
            Blacklist user
          </p>
          <p className="py-2 px-4 border rounded-lg text-lendsqr2 border-lendsqr2">
            activate user
          </p>
        </div>
      </div>
      <>
        <SingleUserSummary
          amountInThousand={amountInThousand}
          phoneConstruct={phoneConstruct}
        />
        <SingleUserGeneral
          amountInThousand={amountInThousand}
          phoneConstruct={phoneConstruct}
          emailAddress={emailAddress}
        />
      </>
    </div>
  );
};

export default SingleUser;
